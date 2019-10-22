import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-category-page',
  templateUrl: './category-page.component.html',
  styleUrls: ['./category-page.component.scss']
})
export class CategoryPageComponent implements OnInit {

    constructor(private categoryService: CategoryService, private router: Router) { }

  inputCtrl: FormControl;
  availableValues: Product[];
  displayValues: Product[];
  subs: Subscription;

  ngOnInit() {
    this.subs = new Subscription();
    this.inputCtrl = new FormControl('');
    this.categoryService.getProducts().subscribe(products => {
      this.availableValues = products;
      this.displayValues = products;
    });
    this.subs.add(
      this.inputCtrl.valueChanges.subscribe(value => {
        this.displayValues = this.filterValues(value, this.availableValues, 'description');
        // "name" : le nom de l'attribut de l'objet Product qui doit matcher
      })
    );
  }

  filterValues(value: string, availableValues: Product[], attribute): Product[] {
    return availableValues.filter(availableValue => availableValue[attribute].indexOf(value) !== -1);
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
