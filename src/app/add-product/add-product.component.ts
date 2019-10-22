import { Component, OnInit } from '@angular/core';
//import { CategoryService } from './category.service';
import { Product } from '../product';
import { from } from 'rxjs';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

  productModel = new Product('', '', '', '', '', '', 0, 0, 0, '', 'miawoo');

  constructor() { }

  ngOnInit() {
  }

 // onSubmit() {
   // this.categoryService.postProduct(this.productModel)
   // .subscribe(
   //   data => console.log('Success!', data),
   //   error => console.log('Error!', error)
   // );
 // }

}
