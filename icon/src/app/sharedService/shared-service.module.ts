import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedServiceService } from './shared-service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  exports: [SharedServiceService],
})
export class SharedServiceModule {}
