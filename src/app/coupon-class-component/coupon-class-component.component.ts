import { Component, OnInit } from '@angular/core';

class Coupon {
     static allowed = ['Pepperoni', 'Blazing Inferno'];
     static create (percentage: number) {
          return `PIZZA_RESTAURANT_${percentage}`;
     }
}

console.log(Coupon.create(25));

@Component({
  selector: 'app-coupon-class-component',
  templateUrl: './coupon-class-component.component.html',
  styleUrls: ['./coupon-class-component.component.css']
})
export class CouponClassComponentComponent implements OnInit {
     
     constructor() { }

     ngOnInit() {
     }

}
