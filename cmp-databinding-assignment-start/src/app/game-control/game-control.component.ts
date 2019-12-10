import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  interval;
  @Output() intervalEmit = new EventEmitter<number>();
  num: number = 0;
  constructor() { }

  ngOnInit() {
  }

  onGameStart(){
    this.interval = setInterval(() => {
      this.intervalEmit.emit(this.num + 1);
      this.num++;
    },1000);
  }
  onGameStop(){
    clearInterval(this.interval);
  }

}
