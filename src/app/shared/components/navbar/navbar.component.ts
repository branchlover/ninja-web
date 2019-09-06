import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  ninja: string;

  constructor(private authService: AuthService, private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
  }

  toLogin(){
    this.router.navigateByUrl('/auth')
  }

  logout(){
    this.authService.logout();
  }

}
