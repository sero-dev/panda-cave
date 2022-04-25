import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isAuthenticated: boolean = false;
  
  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.isAuthenticated = this.authService.isAuthenticated()
  }

  logoutClicked() {
    this.authService.logout()
      .subscribe(() => {
        this.isAuthenticated = this.authService.isAuthenticated()
        this.router.navigate(['/']);
      });
  }
}
