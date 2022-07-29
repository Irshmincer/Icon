import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetListRoutingModule } from './asset-list-routing.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import { AssetListComponent } from './asset-list.component';
import { AssetDetailComponent } from '../asset-detail/asset-detail.component';
import { NavbarModule } from '../navbar/navbar.module';
import { AppModule } from '../app.module';
import { NavbarComponent } from '../navbar/navbar.component';

@NgModule({
  declarations: [AssetListComponent],
  imports: [
    CommonModule,
    AssetListRoutingModule,
    MatDialogModule,
    MatTableModule,
    NavbarModule,
  ],
})
export class AssetListModule {}
