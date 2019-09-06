import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Credentials, LoginResult } from '../models/auth.d';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public apiUrl: string;

  constructor(private http: HttpClient, private router: Router, private dataService: DataService) {
    this.apiUrl = environment.apiUrl;
  }

  login(credentials:Credentials){
    return this.http.post<LoginResult>(this.apiUrl + 'login', credentials)
    .pipe(map((res => {
      this.dataService.setNinjaType(res.result);
      localStorage.setItem('token', res.result)
      return res;
    })))
  }

  isAuthenticated() {
    return !!localStorage.getItem('token');
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigateByUrl('/auth');
  }


}
