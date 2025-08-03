import { Component } from '@angular/core';
import { FormComponent } from '../form/form.component';
import { FormControl, FormGroup } from '@angular/forms';

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
      {value:'kiruba',disabled:false}
    ),
    lastName:new FormControl(),
    email:new FormControl(),
    gender:new FormControl(),
    isMarried:new FormControl(),
    country:new FormControl(),
    address:new FormGroup({
      city:new FormControl(),
      street:new FormControl(),
      pincode:new FormControl()
    }),

  })

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