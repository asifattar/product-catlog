import { Component, Input, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproducts';

@Component({
  selector: 'app-product-dashboard',
  templateUrl: './product-dashboard.component.html',
  styleUrls: ['./product-dashboard.component.scss']
})
export class ProductDashboardComponent implements OnInit {


  @Input() dashBordData !: Iproduct[]

  constructor() { }

  ngOnInit(): void {
  }

}
