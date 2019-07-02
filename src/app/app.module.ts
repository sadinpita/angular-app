import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
// import { TestComponentComponent } from './test-component';
import { TestComponentComponent } from './test-component/test-component.component';

import {
     MatButtonModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatInputModule
} from '@angular/material';

import  {BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObjectComponentComponent } from './object-component/object-component.component';
import { CouponClassComponentComponent } from './coupon-class-component/coupon-class-component.component';

const appRoutes: Routes = [
     { path: 'object-component', component: ObjectComponentComponent },
     { path: 'test-component', component: TestComponentComponent },
     { path: 'coupon-class-component', component: CouponClassComponentComponent },
     { path: '',   redirectTo: '/', pathMatch: 'full' },
   ];

@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ObjectComponentComponent,
    CouponClassComponentComponent
  ],
  imports: [
     RouterModule.forRoot (
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
     ),
     FormsModule,
     BrowserModule,
     CommonModule,
     BrowserAnimationsModule,
     MatButtonModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
