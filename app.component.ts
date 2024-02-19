import { style } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})

export class AppComponent {
  title = 'angular-registration-form';
  showModal: boolean = true;

  tabs1 = { title: 'Basic Info.', route: '/basic info.', active: false,color: 'blue',backgroundColor: 'white' }

  tabs2 = { title: 'Tax', route: '/tax', active: false,color: 'orangered',backgroundColor: 'white'};

  tabs3 = { title: 'Rate', route: '/rate', active: false,color: 'maroon',backgroundColor: 'white' };

  tabs4 = { title: 'Terms', route: '/terms', active: false };
 
  tabs5 = { title: 'Product Image', route: '/product image', active: false };

  tabs6 = { title: 'Loc. Info.', route: '/loc. info', active: false };
  
  showModal1: boolean = false;
  showModal2: boolean = false;
  showModal3: boolean = false;

   ngOnInit(): void {
    this.displaymodal(1);
  
   }
   displaymodal(flag: any){
    //console.log(flag);
    if(flag == 1){
        this.showModal1 = true;
        this.tabs1.active = true;
        this.tabs1.color = 'white';
        this.tabs1.backgroundColor = 'blue';
        this.tabs2.active = false;
        this.tabs2.color = 'orangered';
        this.tabs2.backgroundColor = 'white';
        this.tabs3.active = false;
        this.tabs3.color = 'maroon';
        this.tabs3.backgroundColor = 'white';
        this.showModal2 = false;
        this.showModal3 = false;
      }
      if(flag == 2){
        this.showModal1 = false;
        this.showModal2 = true;
        this.tabs1.active = false;
        this.tabs1.color = 'blue';
        this.tabs1.backgroundColor = 'white';
        this.tabs2.active = true;
        this.tabs2.color = 'white';
        this.tabs2.backgroundColor = 'orangered';
        this.tabs3.active = false;
        this.tabs3.color = 'maroon';
        this.tabs3.backgroundColor = 'white';
        this.showModal3 = false;
      }
      if(flag == 3){
        this.showModal1 = false;
        this.showModal2 = false;
        this.showModal3 = true;
        this.tabs1.active = false;
        this.tabs1.color = 'blue';
        this.tabs1.backgroundColor = 'white';
        this.tabs2.active = false;
        this.tabs2.color = 'orangered';
        this.tabs2.backgroundColor = 'white'
        this.tabs3.active = true;
        this.tabs3.color = 'white';
        this.tabs3.backgroundColor = 'maroon';;
       
      }
   }
   validateInput(event: any) {
    const pattern = /^[0-9]*$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
  validateInt(event : any) {
    const sequence = /^[.0-9]*$/;
    const inputChar = String.fromCharCode(event.charCode);
    if (!sequence.test(inputChar)) {
      event.preventDefault();
    }
  }
 
}


