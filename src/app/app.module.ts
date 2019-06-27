import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ObjectComponentComponent } from './object-component/object-component.component';

const appRoutes: Routes = [
     { path: 'object-component', component: ObjectComponentComponent },
     { path: 'test-component', component: TestComponentComponent }
   ];


@NgModule({
  declarations: [
    AppComponent,
    TestComponentComponent,
    ObjectComponentComponent
  ],
  imports: [
     RouterModule.forRoot (
          appRoutes,
          { enableTracing: true } // <-- debugging purposes only
     ),
     FormsModule,
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
