import { TabComponent } from './tab/tab.component';
import { Component, ContentChildren, QueryList, AfterContentInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'dmd-tab-panel',
  templateUrl: './tab-panel.component.html',
  styleUrls: ['./tab-panel.component.scss']
})
export class TabPanelComponent implements AfterContentInit {

  ngAfterContentInit(): void {


    const selected = this.tabs.find(tab=> tab.selected)  ;
    if(!selected){
      this.tabs.first.selected=true;
    }
  }

  @Input()
  headerTemplate:TemplateRef<any>;

  @ContentChildren(TabComponent)
  tabs: QueryList<TabComponent>;

  selectTab(tab: TabComponent){
    this.tabs.forEach(tab=> tab.selected=false);

    tab.selected = true;
  }

  get headerContext(){
    return {
      tabs: this.tabs
    }
  }

}
