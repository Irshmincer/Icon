import {
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';

import { UploadAssetComponent } from './upload-asset/upload-asset.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;
  @Output() dialogresult = new EventEmitter<string>();
  constructor(private dialog: MatDialog, private route: Router) {}

  dialog_create_asset() {
    console.log('26');
    let dialogRef = this.dialog.open(UploadAssetComponent, {
      width: '960px',
      height: 'auto',
      panelClass: 'padding',
      data: {
        name: '',
        track: '',
        type: '',
      },
    });

    dialogRef.afterClosed().subscribe((res) => {
      this.route.navigate(['/dashboard'], {
        state: { example: this.dialogresult.emit(res.data) },
      });
      console.log(res.data, '1');
      this.dialogresult = res.data;
    });
  }

  navToHomePage() {
    this.route.navigate(['/dashboard']);
  }

  navToLogin() {
    this.route.navigate(['']);
  }

  ngOnInit(): void {}
}
