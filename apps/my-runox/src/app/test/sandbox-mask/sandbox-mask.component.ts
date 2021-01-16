import { fadeInOut } from './animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rnx-sandbox-mask',
  templateUrl: './sandbox-mask.component.html',
  styleUrls: ['./sandbox-mask.component.scss'],
  animations: [fadeInOut],
})
export class SandboxMaskComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
