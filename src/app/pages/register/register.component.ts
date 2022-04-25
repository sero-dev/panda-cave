import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  form = this.fb.group({
    "firstName": ["", Validators.required],
    "lastName": ["", Validators.required],
    "email": ["", Validators.required],
    "password": ["", Validators.required],
    "repeatPassword": ["", Validators.required],

  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  onSubmit() {
    const { email, password } = this.form.value;
    this.authService.register(email, password)
      .subscribe(result => {
        this.router.navigate(['/login']);
      });
  }
}
