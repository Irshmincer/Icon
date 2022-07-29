import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./login/login.module').then((x) => x.LoginModule),
    pathMatch: 'prefix', // 'full' will not trigger child routes,
  },
  { path: 'dashboard', redirectTo: '' },
  {
    path: '',
    loadChildren: () =>
      import('./navbar/navbar.module').then((x) => x.NavbarModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
