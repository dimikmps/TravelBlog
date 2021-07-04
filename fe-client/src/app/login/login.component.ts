import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  private authToken;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  loginTrigger(form: NgForm) {

    this.authToken = this.authService.login(
      form.value.username,
      form.value.password
    );
  }


}
