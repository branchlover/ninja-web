import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticatedGuard } from './shared/guards/authenticated.guard';


const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  { path: 'auth', loadChildren: '../../src/app/auth/auth.module#AuthModule'},
  { path: 'ninja', loadChildren: '../../src/app/ninja/ninja.module#NinjaModule', canLoad: [AuthenticatedGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
