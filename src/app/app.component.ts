import { Component, OnInit } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
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
    public authService: AuthService
  ) { }
  
  ngOnInit() {
    
  } 

  openMobileNav(): void {
    this.showMobileNav = true;
  }

  closeMobileNav(): void {
    this.showMobileNav = false;
  }
}
