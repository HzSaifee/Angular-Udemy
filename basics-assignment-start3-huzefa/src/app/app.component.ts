import { Component } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClick: boolean = false;
  count = [];
  onButtonClick(){
    // this.count.push(this.count.length + 1);
    this.count.push(Date());
    if(this.buttonClick === true){
      this.buttonClick = false;
    }
    else{
      this.buttonClick = true;
    }
  }
  buttonClicked(){
    return this.buttonClick === true ? true : false;
  }
  checkCount(counts){
    if (counts >= 5)
      return true;
  }
  setColor(countCheck){
    if (countCheck === true)
      return 'blue';
  }
}
