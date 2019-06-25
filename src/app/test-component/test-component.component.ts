import { Component, OnInit } from '@angular/core';


@Component({
     selector: 'app-test-component',
     templateUrl: './test-component.component.html',
     styleUrls: ['./test-component.component.css']
})

export class TestComponentComponent implements OnInit {
     
     constructor() {
     }

     ngOnInit() {
          console.log("ngOnInit triggered!");
     }

     testSentence: string = 'This is test sentence, try to change it!';

     public changeSentence (newSentence: string):void {
          this.testSentence = newSentence;
     }

     
}
