import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadAssetComponent } from './upload-asset.component';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [UploadAssetComponent],
  imports: [
    CommonModule,
    MatIconModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule,
  ],
})
export class UploadAssetModule {}
