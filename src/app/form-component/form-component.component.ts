import { Component ,OnInit} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  standalone: false,
  templateUrl: './form-component.component.html',
  styleUrl: './form-component.component.css'
})
export class FormComponentComponent {

  countryList:Country[]=[
    new Country('1','India'),
    new Country('2','US'),
    new Country('3','UK'),

  ]

  contact!:Contact;
  ngOnInit():void{
    this.contact={
      firstName:"",
      lastName:"krihsna",
      mail:"kirubak492@gmail.com",
      gender:"male",
      country:"2",
      address:{
        city:"kallakurichi",
        street:"pillayar kovil street",
        pincode:"606206" 
      }

    }
  }

  onSubmit(form:NgForm){
    console.log(form.value);
  }


}
class Contact{
  firstName!:string;
  lastName!:string;
  mail!:string;
  gender!:string;
  country!:string;
  address!:{
    city:string;
    street:string;
    pincode:string;
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