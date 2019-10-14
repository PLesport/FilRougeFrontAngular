import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[fiche-produit]' })

export class fiche-produit {
  constructor(private ElementRef) {
    this.setBorder('black');
    this.setHeight(180);
   }

   private setBorder (string){


   }
}}
