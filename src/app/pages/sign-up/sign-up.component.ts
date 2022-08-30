import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/services/auth.service';
import { repeatPasswordValidator } from 'src/app/validators/repeat-password.validator';
import { passwordValidator } from 'src/app/validators/password.validator';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form = this.fb.group({
    "firstName": ["", [Validators.required, Validators.maxLength(30)]],
    "lastName": ["", [Validators.required, Validators.maxLength(30)]],
    "email": ["", [Validators.required, Validators.email]],
    "password": ["", passwordValidator()],
    "repeatPassword": ["", Validators.required],
  }, { validators: [repeatPasswordValidator("password", "repeatPassword")] });

  get getControls() {
    return this.form.controls;
  }

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/kitchen']);
    }
  }
  
  onSubmit() {
    const user: User = this.form.value;
    this.authService.signup(user).subscribe();
  }
}
