import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

const EMAIL = 'srochoap@eafit.edu.co';
const PASSWORD = '123456';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  userInfo = {
    username: 'Sebastian Ochoa',
    name: 'Sebastián Ricardo',
    lastname: 'Ochoa Pete',
    email: 'srochoap@eafit.edu.co'
  }

  email: string = '';
  password: string = '';
  loginError: boolean = false;

  constructor(private router: Router, private formBuilder : FormBuilder) {}

  showLoginn: boolean = true; 
  showForm: boolean = false;
  showMensageEmail: boolean = false; 
  


  errorMessage = '' 
  
  formLogin = new FormGroup({
    email:  new FormControl('', [Validators.required]),
    password:  new FormControl('', [Validators.required])
  });

  login() {
    if(this.email === EMAIL && this.password === PASSWORD ) {
      localStorage.setItem('user', JSON.stringify(this.userInfo) );
      this.router.navigate(['/profile'])
    }else {
      this.loginError = true;
    }
  }
  onSubmit(){

    if(!this.formLogin.valid){
      this.errorMessage = 'El formulario no está completo.';
      return;
    }
  }
}
