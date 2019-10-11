import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  dataUsername = true;

  onResetBoton(){
    this.username = '';
    this.dataUsername = true;
  }

  onUpdateInput(event: any) {
    console.log(event);
    this.username = (<HTMLInputElement>event.target).value;
    // if(!this.username) {
    //   this.dataUsername = true;
    // } else {
    //   this.dataUsername = false;
    // }
    this.username ? this.dataUsername = false : this.dataUsername = true;
  }

  constructor() {
    
  }
}
