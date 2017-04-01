import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName = '';
  allowReset = false;

  resetUserName(){
    this.userName = '';
  }

  onUpdateUserName(event){
    console.log(event);
    if (event.target.value != ''){
      this.allowReset = true;
    } else {
      this.allowReset = false;
    }
  }
}
