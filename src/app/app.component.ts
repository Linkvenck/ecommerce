import { Component } from '@angular/core';

declare var $:any;
declare function initPageEccomerce([]):any 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ecommerce';
  constructor(){
    setTimeout(() => {
      initPageEccomerce($);
    }, 50);
  }
}
