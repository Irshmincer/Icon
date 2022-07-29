import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar.component';

const routes: Routes = [
  {
    path: '',
    component: NavbarComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: () =>
          import('../asset-list/asset-list.module').then(
            (x) => x.AssetListModule
          ),
      },
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

      {
        path: 'assets',
        loadChildren: () =>
          import('../asset-detail/asset-detail.module').then(
            (x) => x.AssetDetailModule
          ),
        data: { preload: true, delay: 500 },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NavbarRoutingModule {}
