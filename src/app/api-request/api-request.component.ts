import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-api-request',
  standalone: false,
  templateUrl: './api-request.component.html',
  styleUrl: './api-request.component.css'
})
export class ApiRequestComponent {
 constructor(private http:HttpClient){

 }
 userList:User[]=[]
 ngOnInit(){
  
    this.getUsers().subscribe((response)=>{
     this.userList=response;
     console.log(this.userList);
     
 })
      
 }

 userForm = new FormGroup({
  name: new FormControl(''),   
  email: new FormControl('')
});

onSubmit(){
  console.log(this.userForm.value);
  this.addUsr().subscribe((response)=>{
    this.userList.push(response)
  })
  
}

 getUsers(){
  return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
 }

 addUsr(){
  return this.http.post<User>('https://jsonplaceholder.typicode.com/users',{
    name:this.userForm.controls.name.value,
    email:this.userForm.controls.email.value,

  })
 }
}


class User{

  name!:String;
  email!:String;
}