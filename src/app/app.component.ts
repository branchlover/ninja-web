import { Component } from '@angular/core';
import { LoadingBarService } from '@ngx-loading-bar/core';
import { RouterEvent, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private loadingBar: LoadingBarService) {
    
  }

  private navigationInterceptor(e: RouterEvent) {
    if (e instanceof NavigationStart) {
      this.startLoading();
    }

    if (e instanceof NavigationEnd) {
     this.stopLoading();
    }

    if (e instanceof NavigationEnd || e instanceof NavigationCancel || e instanceof NavigationError) {
      this.stopLoading();
    }
  }
  
  private startLoading() {
    this.loadingBar.start();
  }

  private stopLoading() {
    this.loadingBar.complete();
  }
}
