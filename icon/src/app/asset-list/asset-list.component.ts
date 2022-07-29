import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'track', 'type', 'ISRC'];
  dataSource = ELEMENT_DATA;
  @Input() public resultGridList: Array<any> = [];
  data = [];

  result!: any;

  constructor(private service: LoginService, private router: Router) {}
  @ViewChild(MatTable, { static: true }) table!: MatTable<any>;

  ngOnInit(): void {
    //this.getAssetList();
    this.result = history.state;
    console.log(this.result);
  }

  getAssetList() {
    this.service.getAsset().subscribe((x) => console.log(x));
  }

  detailspage() {
    console.log('82');
    this.router.navigate(['dashboard/assets']);
  }
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Test1', type: 'Sample1', track: 'Track', ISRC: '-' },
  { name: 'Test2', type: 'Sample2', track: 'Musical Track ', ISRC: '-' },
  { name: 'Test3', type: 'Sample3', track: 'Classical Track', ISRC: '-' },
  { name: 'Test4', type: 'Sample4', track: 'Ringtone', ISRC: '-' },
];

export interface PeriodicElement {
  name: string;
  ISRC: string;
  type: string;
  track: string;
}
