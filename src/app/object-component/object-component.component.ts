import { Component, OnInit } from '@angular/core';
import { truncateSync } from 'fs';

class Sandwich {
     name: string;
     cheese: boolean;
     sauces: string[] = [];

     constructor (sauces?: string[], name?: string , cheese?: boolean) {
          this.name = name;
          this.cheese = cheese;
          this.sauces = sauces;
     }

     addSauce (sauce: string) {
          this.sauces.push(sauce);
     }

     changeCheese (cheese: boolean) {
          this.cheese = cheese;
     }
}

type Pizza = {
     name: string,
     toppings: number
}

@Component({
  selector: 'app-object-component',
  templateUrl: './object-component.component.html',
  styleUrls: ['./object-component.component.css']
})
export class ObjectComponentComponent implements OnInit {

     constructor() { }

     ngOnInit() {
     }

     inputValue: string;

     tasty = new Sandwich([] , 'Tasty', false)
     
     pizza: Pizza = {
          name: 'Blazing Inferno',
          toppings: 5
     }

     testObject = {
          id: 0,
          name: 'John Doe',
          age: '22'          
     }

     testObjArr = [
          { id: 0, name: 'Arthur Morgan', age: '36'},
          { id: 1, name: 'John Silaya', age: '25'},
          { id: 2, name: 'Fjodor Ruskavski', age: '27'},
          { id: 3, name: 'Nicolas Mendetta', age: '29'}
     ]

}
