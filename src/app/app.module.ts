import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductFormComponent } from './shared/components/product-form/product-form.component';
import { ProductDashboardComponent } from './shared/components/product-dashboard/product-dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
