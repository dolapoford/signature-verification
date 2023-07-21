import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-login-background',
  templateUrl: './login-background.component.html',
  styleUrls: ['./login-background.component.scss']
})
export class LoginBackgroundComponent  implements OnInit {
  valCheck: string[] = ['remember'];

  value!: string ;

  loginForm!: FormGroup ;

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


  // get email() {
  //   return this.loginForm.get('email');
  // }

  // get password() {
  //   return this.loginForm.get('password');
  // }

  onSubmit() {
    // Perform login logic here
    console.log(this.loginForm?.value);
    
  }
}
