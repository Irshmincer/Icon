import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssetDetailComponent } from './asset-detail.component';

const routes: Routes = [
  {
    path: '',
    component: AssetDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AssetDetailRoutingModule {}
