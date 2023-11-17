import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AuthService } from '../../../services/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  providers: [AuthService, ToastrService]
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;

constructor(
  private formBuilder:FormBuilder,
  private authService:AuthService,
  private toastrService:ToastrService
  ){}


  ngOnInit(): void {
    this.createLoginForm();
  }

  createLoginForm(){
    this.loginForm = this.formBuilder.group({
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
  }

  login(){
    if (this.loginForm.valid){
      let loginModel = Object.assign({}, this.loginForm.value);
      this.authService.login(loginModel).subscribe(response => {
        this.toastrService.info(response.message);
        localStorage.setItem("token", response.data.token);
      }, responseError => {
        this.toastrService.error(responseError.error)
      })
    }
  }
}
