import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  title = "Shop"
  search = "";

  constructor(){
    console.log(this.search.length);
  }

  onInput(event: any){
    console.log(event.data);
  }

  checkDisability(){
      return this.search === ""
  }
}
