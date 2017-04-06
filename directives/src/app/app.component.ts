import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonClicked = false;
  listClicks = [];
  counter = 0;

  onButtonClick(){
    this.buttonClicked = !this.buttonClicked;
    this.counter += 1;
    this.listClicks.push(this.counter);
  }
}
