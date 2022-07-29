import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatAccordion } from '@angular/material/expansion';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DeleteComponent } from './delete/delete.component';

@Component({
  selector: 'app-asset-detail',
  templateUrl: './asset-detail.component.html',
  styleUrls: ['./asset-detail.component.scss'],
})
export class AssetDetailComponent implements OnInit {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  date = new FormControl(new Date());

  selected = 'FRONT';
  sticky: boolean = false;

  panelOpenState = false;
  constructor(private router: Router, private dialog: MatDialog) {}

  dataSource3 = ELEMENT_DATA_3;
  displayedColumns3: string[] = ['language', 'AssetTitle', 'TrackVersion'];

  ngOnInit(): void {}

  dialog_delete() {
    console.log('26');
    this.dialog.open(DeleteComponent, {
      width: '350px',
      height: '250px',
    });
  }
}

const ELEMENT_DATA_3: PeriodicElement_3[] = [];

export interface PeriodicElement_3 {
  language: string;
  AssetTitle: string;
  TrackVersion: string;
}
