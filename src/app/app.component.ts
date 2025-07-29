import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'practice';

  title1:String=''
  title2:String []=[]

  titleAdded(){
    this.title2.push(this.title1)
  }
}
