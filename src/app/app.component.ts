import { Component } from '@angular/core';
import { Iproduct, iCatg } from './shared/models/iproducts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  title = 'productAndCatlog-task';
  
  formData : Iproduct[] = []
  
  getingData( data : Iproduct[]) {

     this.formData = data

    console.log(this.formData);
    
  
}

}
