import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from './services/alert.service';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  showMobileNav: boolean = false;
  isAuthenticated: boolean = false;

  constructor(
    public authService: AuthService,
    private alertService: AlertService,
    private router: Router
  ) { }
  
  ngOnInit() {
    
  } 

  openMobileNav(): void {
    this.showMobileNav = true;
  }

  closeMobileNav(): void {
    this.showMobileNav = false;
  }

  logout() {
    this.authService.logout()
      .subscribe(result => {
        this.showMobileNav = false;
        result.length = 4000;
        this.alertService.sendMessage(result)
        this.router.navigate(['']);
      });
  }
}
