import { Component, OnInit , AfterContentInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {
  private interval;
  @Output() intervalFired = new EventEmitter<number>();
  private lastNumber = 0;
  constructor() { }

  ngOnInit() {
    console.log("Init");
  }

  onStopCounter(){
    console.log("Stopping counter");
    clearInterval(this.interval);
  }

  onStartCounter(){
    console.log("Counter has started");
    this.interval = setInterval(() => {
      this.lastNumber++;
      this.intervalFired.emit(this.lastNumber);
      console.log("Counter: "+this.lastNumber);
    },1000);
  }
}
