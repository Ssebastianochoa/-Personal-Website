import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isUserLoggedIn = this.isLoggedIn();
    
  }

  isLoggedIn(){
    const user = localStorage.getItem('user');
    return  user? true: false;
  }
  logout(){
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
  }
}
