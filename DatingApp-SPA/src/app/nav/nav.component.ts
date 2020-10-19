import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit, ɵclearResolutionOfComponentResourcesQueue } from '@angular/core';
import { AlertifyService } from '../_services/alertify.service';

import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  model: any = {};

  constructor(public authService: AuthService, private alertify: AlertifyService) { }

  ngOnInit(): void {
  }

  // tslint:disable-next-line: typedef
  login() {
     this.authService.login(this.model).subscribe(next => {
      this.alertify.success('Logged in successfully');
    // tslint:disable-next-line: no-shadowed-variable
    }, error => {
      this.alertify.error(error);
    });
  }

  // tslint:disable-next-line: typedef
  loggedIn(){
     return this.authService.loggedIn();
  }

  // tslint:disable-next-line: typedef
  logout(){
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }
}
