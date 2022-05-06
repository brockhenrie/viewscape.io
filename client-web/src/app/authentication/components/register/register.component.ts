import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  signup = this.fb.group({
    firstName: ['', [Validators.required]],
    lastName: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    password: ['',[Validators.required, Validators.minLength(8)]],
    passwordConf: ['',[Validators.required,]]
  });




  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSubmit(){
    if (this.signup.value.password === this.signup.value.passwordConf){
      const email = this.signup.value.email;
      const password = this.signup.value.password;
      this.auth.register(this.signup.value);
      // this.router.navigate(['Auth/accountInfo']);
    }

  }

  onCancel(){
    this.router.navigate(['welcome'])
  }

}
