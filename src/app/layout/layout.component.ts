import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  constructor(private router: Router) {}


  isUserLoggedIn: boolean = false;

  ngOnInit(): void {
    this.isUserLoggedIn = this.isLoggedIn();
    if (this.router.url === '/') {
      this.router.navigate(['/home']);
    }
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
