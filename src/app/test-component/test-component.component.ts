import { Component, OnInit } from '@angular/core';
// import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
     selector: 'app-test-component',
     templateUrl: './test-component.component.html',
     styleUrls: ['./test-component.component.css']
})

// export class SnackBarOverviewExample {
//      constructor(private _snackBar: MatSnackBar) {}

//      openSnackBar(message: string, action: string) {
//           this._snackBar.open(message, action, {
//           duration: 2000,
//           });
//      }
// }

export class TestComponentComponent implements OnInit {
     
     constructor() {
     }

     ngOnInit() {
          console.log("ngOnInit triggered!");
     }

     showClearMsg: boolean = false;
     testSentence: string = 'This is test sentence, try to change it!';

     public changeSentence (newSentence: string):void {
          this.testSentence = newSentence;
     }

     public clearText () {
          this.changeSentence('');
          this.showClearMsg = true;
          setTimeout(()=>{
               this.showClearMsg = false;
          }, 2000);
     }

}
