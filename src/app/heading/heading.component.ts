import { Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-heading',
  standalone: false,
  templateUrl: './heading.component.html',
  styleUrl: './heading.component.css'
})
export class HeadingComponent implements OnChanges , OnInit,DoCheck,OnDestroy{
  
  

  @Input() text:String []=[]
  noOfText=0
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges called");
    console.log(this.text);
    this.noOfText=1
    
  }
    ngOnInit(): void {
     console.log("ngOnInit called");
     this.text.push('initialized by ngOnit')
    console.log(this.text);
     //it is called after the ngOnchanges
  }
  ngDoCheck(): void {
    console.log("docheck called");

    if(this.text.length>this.noOfText){
      this.noOfText++
      console.log(this.text);
      
      console.log("text list increased");
      
    }

    
  }
  ngOnDestroy(): void {
   console.log("On destry called");
   
  }
  
}
