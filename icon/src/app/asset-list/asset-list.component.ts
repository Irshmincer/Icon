import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {

  constructor(private service:LoginService) { }

  ngOnInit(): void {
  this.getassetvalues()
  }

  getassetvalues(){
    this.service.getasset().subscribe(x=>console.log(x))
  }

}
