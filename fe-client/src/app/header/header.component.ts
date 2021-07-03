import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  public userStatus;

  constructor(private authService: AuthService) {
    this.userStatus = authService.checkUserStatus();
  }

  ngOnInit() {
    this.authService.checkUserStatus().subscribe((userStatus) => {
      this.userStatus = userStatus;
    });
  }

  onLogoutClick(event: Event): void {
    event.preventDefault();
    this.authService.logout();
  }
}
