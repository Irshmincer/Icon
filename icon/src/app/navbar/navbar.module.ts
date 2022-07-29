import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadAssetComponent } from './upload-asset/upload-asset.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { NavbarComponent } from './navbar.component';
import { MatMenuItem, MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { NavbarRoutingModule } from './navbar-routing.module';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [NavbarComponent],
  imports: [
    CommonModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatToolbarModule,
    NavbarRoutingModule,
    MatInputModule,
  ],
  exports: [NavbarComponent],
})
export class NavbarModule {}
