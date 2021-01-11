import { Component, Input} from '@angular/core';

@Component({
  selector: 'dmd-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss']
})
export class TabComponent {

  @Input()
  title:string;

  @Input()
  selected = false;

}
