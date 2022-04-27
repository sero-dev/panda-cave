import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  form = this.fb.group({
    "firstName": ["", Validators.required],
    "lastName": ["", Validators.required],
    "email": ["", [Validators.required, Validators.email]],
    "password": ["", Validators.required],
    "repeatPassword": ["", Validators.required],
  });

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
    const { email, password } = this.form.value;
    this.authService.register(email, password)
      .subscribe(result => {
        this.router.navigate(['/login']);
      });
  }
}
