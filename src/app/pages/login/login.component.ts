import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = this.fb.group({
    'email': ['', [Validators.required, Validators.email]],
    'password': ['', Validators.required]
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { email, password } = this.form.value;
    this.authService.login(email, password)
      .subscribe(result => {
        this.router.navigate(['/kitchen']);
      });
  }

}
