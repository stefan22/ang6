import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';


import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { List1Component } from './list1/list1.component';
import { List1Details1Component } from './list1-details1/list1-details1.component';
import { List1Details2Component } from './list1-details2/list1-details2.component';

import { SearchListPipe } from './search-list.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';




@NgModule({

  declarations: [
    AppComponent,
    NavComponent,
    List1Component,
    SearchListPipe,
    DashboardComponent,
    LoginComponent,
    ResetPasswordComponent,
    List1Details1Component,
    List1Details2Component
    
   
  ],

  imports: [
    BrowserModule, 
    FormsModule, 
    HttpClientModule,
    AppRoutingModule
  
  ],

  providers: [],
  
  bootstrap: [AppComponent]

})
export class AppModule {}
