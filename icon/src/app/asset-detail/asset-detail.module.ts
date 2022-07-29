import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AssetDetailRoutingModule } from './asset-detail-routing.module';
import { AssetDetailComponent } from './asset-detail.component';
import { AppModule } from '../app.module';
import { NavbarComponent } from '../navbar/navbar.component';
import { NavbarModule } from '../navbar/navbar.module';
import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DeleteComponent } from './delete/delete.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [AssetDetailComponent, DeleteComponent],
  imports: [
    CommonModule,
    AssetDetailRoutingModule,
    NavbarModule,
    CdkAccordionModule,
    MatExpansionModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    MatNativeDateModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class AssetDetailModule {}
