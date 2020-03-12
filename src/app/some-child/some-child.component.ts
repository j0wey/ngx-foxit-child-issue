import { Component, OnInit } from '@angular/core';
import { licenseSN, licenseKey} from './../license-key';

@Component({
  selector: 'app-some-child',
  templateUrl: './some-child.component.html',
  styleUrls: ['./some-child.component.sass']
})
export class SomeChildComponent implements OnInit {
  licenseSN = licenseSN;
  licenseKey = licenseKey;

  constructor() { }

  ngOnInit() {
  }

}
