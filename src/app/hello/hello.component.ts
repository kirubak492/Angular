import { Component } from '@angular/core';

@Component({
  selector: 'app-hello',
  standalone: false,
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent {

  //title -interpolation
  title='Learning Angular'
  name='kiruba'
  click="Click me!!"

  //property Binding
  isdisabled=false;
  value=0;

  //ngModel
  ngModelvalue=''

  //event binding
  count(){
    console.log("clicked" + ""+ ++this.value);
  }
  inputValue=''
  handleInput(event:any){
    this.inputValue=(event.target as HTMLInputElement).value
  }

  //ngFor
  movieTitle='List of Movies'
  movieList=[
  {
    "title": "Vikram",
    "hero": "Kamal Haasan",
    "director": "Lokesh Kanagaraj",
    "release_date": "2022-06-03"
  },
  {
    "title": "Leo",
    "hero": "Vijay",
    "director": "Lokesh Kanagaraj",
    "release_date": "2023-10-19"
  },
  {
    "title": "Jailer",
    "hero": "Rajinikanth",
    "director": "Nelson Dilipkumar",
    "release_date": "2023-08-10"
  },
  {
    "title": "Maamannan",
    "hero": "Udhayanidhi Stalin",
    "director": "Mari Selvaraj",
    "release_date": "2023-06-29"
  },
  {
    "title": "Don",
    "hero": "Sivakarthikeyan",
    "director": "Cibi Chakaravarthi",
    "release_date": "2022-05-13"
  },
  {
    "title": "Thunivu",
    "hero": "Ajith Kumar",
    "director": "H. Vinoth",
    "release_date": "2023-01-11"
  },
  {
    "title": "Doctor",
    "hero": "Sivakarthikeyan",
    "director": "Nelson Dilipkumar",
    "release_date": "2021-10-09"
  }
  ]
}
