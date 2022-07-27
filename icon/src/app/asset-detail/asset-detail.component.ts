import {
  Component,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAccordion } from '@angular/material/expansion';

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
  constructor() {}
  dataSource3 = ELEMENT_DATA_3;
  displayedColumns3: string[] = ['language', 'AssetTitle', 'TrackVersion'];

  ngOnInit(): void {}
}

const ELEMENT_DATA_3: PeriodicElement_3[] = [];

export interface PeriodicElement_3 {
  language: string;
  AssetTitle: string;
  TrackVersion: string;
}
