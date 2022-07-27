import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UploadAssetComponent } from './upload-asset/upload-asset.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private dialog: MatDialog) {}

  dialog_create_asset() {
    this.dialog.open(UploadAssetComponent, {
      width: '960px',
      height: 'auto',
      panelClass: 'padding',
    });
  }

  ngOnInit(): void {}
}
