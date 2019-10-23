import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Product } from '../product';
import { IAlert } from '../ialert';
import { CategoryService } from '../category.service';
import { OrderDetailService } from '../order-detail.service';
import { OrderDetail } from '../order-detail';
import { OrderProduct } from '../order-product';
import { Registration } from '../registration';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  dafualtQuantity = 1;
  productAddedTocart: Product[];
  allTotal: number;
  currentUser: Registration[];
  orderDetail: OrderDetail;
  orderItem: OrderProduct[];

  public globalResponse: any;
  public alerts: Array<IAlert> = [];

  deliveryForm: FormGroup;


  // tslint:disable-next-line: max-line-length
  constructor(private categoryService: CategoryService, private fb: FormBuilder, private authService: AuthenticationService, private orderService: OrderDetailService) {}

  ngOnInit() {
    this.productAddedTocart = this.categoryService.getProductFromCart();
    // tslint:disable-next-line: forin
    for (const i in this.productAddedTocart) {
      this.productAddedTocart[i].quantity = 1;
   }
    this.categoryService.removeAllProductFromCart();
    this.categoryService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);

    this.GetLoggedinUserDetails();

    this.deliveryForm = this.fb.group({
    UserName:  ['', [Validators.required]],
    DeliveryAddress: ['', [Validators.required]],
    Phone: ['', [Validators.required]],
    Email: ['', [Validators.required]],
    Message: ['', []],
    Amount: ['', [Validators.required]],

  });

    this.deliveryForm.controls.UserName.setValue(this.currentUser['UserName']);
    this.deliveryForm.controls.Phone.setValue(this.currentUser['Phone']);
    this.deliveryForm.controls.Email.setValue(this.currentUser['Email']);
    this.deliveryForm.controls.Amount.setValue(this.allTotal);
  }
  onAddQuantity(product: Product) {
    // Get Product
    this.productAddedTocart = this.categoryService.getProductFromCart();
    this.productAddedTocart.find(p => p.id === product.id).quantity = product.quantity + 1;
    this.categoryService.removeAllProductFromCart();
    this.categoryService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
    this.deliveryForm.controls.Amount.setValue(this.allTotal);

  }
  onRemoveQuantity(product: Product) {
    this.productAddedTocart = this.categoryService.getProductFromCart();
    this.productAddedTocart.find(p => p.id === product.id).quantity = product.quantity - 1;
    this.categoryService.removeAllProductFromCart();
    this.categoryService.addProductToCart(this.productAddedTocart);
    this.calculteAllTotal(this.productAddedTocart);
    this.deliveryForm.controls.Amount.setValue(this.allTotal);

  }
  calculteAllTotal(allItems: Product[]) {
    let total = 0;
    // tslint:disable-next-line: forin
    for (const i in allItems) {
      total = total + (allItems[i].quantity * allItems[i].price);
   }
    this.allTotal = total;
  }

  GetLoggedinUserDetails() {
    this.currentUser = this.authService.getRole();

  }
  ConfirmOrder() {
    const date: Date = new Date();
    const id = this.currentUser['Id'];
    const name = this.currentUser['UserName'];
    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();
    const dateTimeStamp = day.toString()
    + monthIndex.toString()
    + year.toString()
    + minutes.toString()
    + hours.toString()
    + seconds.toString();
    const orderDetail: any = {};

    // Orderdetail is object which hold all the value, which needs to be saved into database
    orderDetail.CustomerId = this.currentUser['Id'];
    orderDetail.CustomerName = this.currentUser['UserName'];
    orderDetail.DeliveryAddress = this.deliveryForm.controls['DeliveryAddress'].value;
    orderDetail.Phone = this.deliveryForm.controls['Phone'].value;

    orderDetail.PaymentRefrenceId = id + '-' + name + dateTimeStamp;
    orderDetail.OrderPayMethod = 'Cash On Delivery';

    // Assigning the ordered item details
    this.orderItem = [];
    // tslint:disable-next-line: forin
    for (const i in this.productAddedTocart) {
      this.orderItem.push({
        ID: 0,
        ProductID: this.productAddedTocart[i].id,
        ProductName: this.productAddedTocart[i].name,
        OrderedQuantity: this.productAddedTocart[i].quantity,
        PerUnitPrice: this.productAddedTocart[i].price,
        OrderID: 0,
      }) ;
   }
      // So now compelte object of order is
    orderDetail.OrderItems = this.orderItem;

    this.orderService.PlaceOrder(orderDetail)
            .subscribe((result) => {
              this.globalResponse = result;
            },
            error => { // This is error part
              console.log(error.message);
              this.alerts.push({
                id: 2,
                type: 'danger',
                message: 'Something went wrong while placing the order, Please try after sometime.'
              });
            },
            () => {
                //  This is Success part
                console.log(this.globalResponse);
                this.alerts.push({
                  id: 1,
                  type: 'success',
                  message: 'Order has been placed succesfully.',
                });
                }
              );

  }
  public closeAlert(alert: IAlert) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
}

}

