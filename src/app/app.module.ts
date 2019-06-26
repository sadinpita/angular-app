import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
// import { TestComponentComponent } from './test-component';
import { TestComponentComponent } from './test-component/test-component.component';

import {
     MatButtonModule,
     MatCheckboxModule,
     MatFormFieldModule,
     MatInputModule
} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ObjectComponentComponent } from './object-component/object-component.component';



@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ObjectComponentComponent
  ],
  imports: [
     BrowserModule,
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
