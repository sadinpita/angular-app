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

     inputvalue: any = '';
     showClearMsg: boolean = false;
     testSentence: string = 'This is test sentence, try to change it!';

     public changeSentence (newSentence: string):void {
          this.testSentence = newSentence;
     }

     public clearText () {
          if (this.testSentence !== '') {
               this.changeSentence('');
               this.showClearMsg = true;
               setTimeout(() => {
                    this.showClearMsg = false;
               }, 2000);
               this.inputvalue = '';
          }
     }

}


