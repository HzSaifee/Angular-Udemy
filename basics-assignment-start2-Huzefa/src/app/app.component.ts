import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string = 'Enter Your Text Here';
  isEmpty(){
    if (this.userName.length !== 0)
      return false;
    return true;
  }
  onResetUsername(){
    this.userName = '';
  }
}
