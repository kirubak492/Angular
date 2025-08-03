import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: false,
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css'
})
export class ReactiveFormComponent {



    countryList:Country[]=[
    new Country('1','India'),
    new Country('2','US'),
    new Country('3','UK'),

  ]
  contactForm=new FormGroup({
    firstName:new FormControl(
      '',[Validators.required,Validators.minLength(6)]      
    ),
    lastName:new FormControl({
      value:"krishna",
      disabled:false
    },[Validators.required,Validators.maxLength(10),Validators.pattern("^[a-zA-Z]+$")]
    ),
    email:new FormControl( '',[Validators.required,Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$')]),
    gender:new FormControl('',[Validators.required]),
    isMarried:new FormControl('',[Validators.requiredTrue]),
    country:new FormControl('',[Validators.required]),
    address:new FormGroup({
      city:new FormControl('',[Validators.required]),
      street:new FormControl('',[Validators.required]),
      pincode:new FormControl('',[Validators.required])
    }),

  })

  get firstname(){
    return this.contactForm.get('firstName');
  }
  get lastname(){
    return this.contactForm.get('lastName');
  }
  get email(){
    return this.contactForm.get('email');
  }
  get gender(){
    return this.contactForm.get('gender');
  }
  get marriedStatus(){
    return this.contactForm.get('isMarried');
  }
  get country(){
    return this.contactForm.get('country');
  }
  get city(){
    return this.contactForm.get('address')?.get('city');
  }
  get street(){
    return this.contactForm.get('address')?.get('street');
  }
  get pincode(){
    return this.contactForm.get('address')?.get('pincode');
  }
  
   
      onSubmit() {
    console.log(this.contactForm.value)
    }
}


class Country{
id:String;
name:String;

constructor(id:String,name:String){
  this.id=id;
  this.name=name;
}
}