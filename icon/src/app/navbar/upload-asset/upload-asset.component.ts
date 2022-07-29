import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-upload-asset',
  templateUrl: './upload-asset.component.html',
  styleUrls: ['./upload-asset.component.scss'],
})
export class UploadAssetComponent implements OnInit {
  public invoiceForm!: FormGroup;
  name: string = '';
  track: string = '';
  type: string = '';
  constructor(
    private _fb: FormBuilder,
    private dialogRef: MatDialogRef<UploadAssetComponent>,
    private route: Router
  ) {}
  ngOnInit() {
    this.invoiceForm = this._fb.group({
      Rows: this._fb.array([this.initRows()]),
    });
  }

  @Output() data = new EventEmitter<string>();
  @Output() newitemEvent = new EventEmitter<string>();

  selected = 'option2';
  result: any;
  get formArr() {
    return this.invoiceForm.get('Rows') as FormArray;
  }

  onFileSelected(event: Event) {
    const target = event.target as HTMLInputElement;
    if (target.files && target.files.length > 0) {
      console.log(target.files[0].name);
      this.invoiceForm.value['name'] = target.files[0].name;
    }

    // <--- File Object for future use.
  }

  initRows() {
    const form = this._fb.group({
      name: `${this.name}`,
      track: `${this.track}`,
      type: `${this.type}`,
    });

    return form;
  }

  addNewRow() {
    this.formArr.push(this.initRows());
  }

  deleteRow(index: number) {
    this.formArr.removeAt(index);
  }

  onSubmit() {
    // const form = {
    //   asset_version: 'Test',
    //   name: 'Test',
    //   type: 'TRACK',
    // };
    // this.service.getasset(form).subscribe((x) => {
    //   console.log(x);
    // });
    const form = this.invoiceForm.value['Rows'][0];
    const name = form.name;
    const type = form.type;
    const track = form.track;

    let dialogRef = this.dialogRef.close({
      data: {
        name: `${name}`,
        type: `${type}`,
        track: `${track}`,
      },
    });
  }
}
