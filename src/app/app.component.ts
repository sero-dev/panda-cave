import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showMobileNav: boolean = false;

  openMobileNav(): void {
    this.showMobileNav = true;
  }

  closeMobileNav(): void {
    this.showMobileNav = false;
  }
}
