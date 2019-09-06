import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from  '@angular/common/http';
import { AuthService } from './services/auth.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ArticleComponent } from './components/article/article.component';



@NgModule({
  declarations: [NavbarComponent, ArticleComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [NavbarComponent, ArticleComponent],
  providers: [
    AuthService
  ]
})
export class SharedModule { }
