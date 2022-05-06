import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  login = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(8)]]
});

authMode = 'Login';

constructor(
    private auth: AuthService,
    private fb: FormBuilder,
    private router: Router
) {}

ngOnInit(): void {}

signInEmail() {
    this.auth.login(
        this.login.value.email,
        this.login.value.password
    ).subscribe(
      {
        error: (err)=> console.error(err),
        next: ()=>this.router.navigate(['home'])
      }
     );;
}

onRegister() {
    this.router.navigate(['register']);
}

getErrorMessage() {
    if (this.login.controls['error'].hasError('required')) {
        return 'You must enter a value';
    }

    return this.login.controls['error'].hasError('email')
        ? 'Not a valid email'
        : '';
}
}
