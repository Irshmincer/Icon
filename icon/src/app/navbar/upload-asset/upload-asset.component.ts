import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/login/login.service';

@Component({
  selector: 'app-upload-asset',
  templateUrl: './upload-asset.component.html',
  styleUrls: ['./upload-asset.component.scss'],
})
export class UploadAssetComponent implements OnInit {
  public invoiceForm!: FormGroup;

  @Input() name: string = '';
  @Input() track: string = '';
  constructor(private _fb: FormBuilder, private service: LoginService) {}
  ngOnInit() {
    this.invoiceForm = this._fb.group({
      Rows: this._fb.array([this.initRows()]),
    });
  }

  selected = 'option2';

  get formArr() {
    return this.invoiceForm.get('Rows') as FormArray;
  }

  form = new FormGroup({
    name: new FormControl(),
    track: new FormControl(),
  });

  initRows() {
    return this.form;
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
    this.name = this.form.value['name'];
    console.log(this.name);
  }
}
