import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delete',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent implements OnInit {
  constructor(private router: Router, private dialog: MatDialog) {}

  ngOnInit(): void {}

  onsubmit() {
    this.dialog.closeAll();
    this.router.navigate(['/dashboard']);
  }
}
