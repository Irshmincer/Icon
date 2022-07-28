import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss'],
})
export class AssetListComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
  constructor(private service: LoginService, private router: Router) {}

  ngOnInit(): void {
    this.getAssetList();
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
  { position: 1, name: 'Test', weight: 'Sample', symbol: 'Track' },
];

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}