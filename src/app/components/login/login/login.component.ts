import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormControl, Validators, FormBuilder, FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

loginForm:FormGroup;

constructor(private formBuilder:FormBuilder){}


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
      console.log(this.loginForm.value);
    }
  }
}
