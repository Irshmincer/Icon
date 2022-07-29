import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from '../asset-list/asset-list.component';
import { LoginComponent } from './login.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('../asset-list/asset-list.module').then((x) => x.AssetListModule),
  },
  {
    path: '',
    loadChildren: () =>
      import('../navbar/navbar.module').then((x) => x.NavbarModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginRoutingModule {}
