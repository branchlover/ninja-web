import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanLoad, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticatedGuard implements CanLoad  {
  constructor(private authService: AuthService, private router: Router){

  }
  canLoad(route: Route): Observable<boolean>|Promise<boolean>|boolean {
    let url: string = route.path;

    if(this.authService.isAuthenticated()){
      return true;
    }

    this.router.navigateByUrl('/auth')
    return false;
  }
  
}
