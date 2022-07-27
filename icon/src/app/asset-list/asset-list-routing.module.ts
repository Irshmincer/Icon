import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetListComponent } from './asset-list.component';

const routes: Routes = [
  { path: '', component: AssetListComponent },
  {
    path: 'assets',
    loadChildren: () =>
      import('../asset-detail/asset-detail.module').then(
        (x) => x.AssetDetailModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetListRoutingModule {}
