import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Iproduct, iCatg } from '../../models/iproducts';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  constructor() { }

  @Output() onDataRecive : EventEmitter<Iproduct[]> = new EventEmitter<Iproduct[]>()



  ngOnInit(): void {
  }

  
  productArray : Array<Iproduct> = []



addProductDeatails(pname : HTMLInputElement,pDes : HTMLInputElement , catg : iCatg) {

  this.onDataRecive.emit(this.productArray)
  let obj : Iproduct = {
    pname : pname.value,
    pDescription : pDes.value,
    pCAtg : catg
  }

  this.productArray.push(obj)


console.log(pname.value,pDes.value);

pname.value = '';
pDes.value = '';

}







}
