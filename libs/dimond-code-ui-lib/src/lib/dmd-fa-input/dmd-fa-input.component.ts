import { Component, ContentChild, Input, AfterContentInit, HostBinding } from '@angular/core';
import { InputRefDirective } from '../common/input-ref.directive';

@Component({
  selector: 'dmd-fa-input',
  templateUrl: './dmd-fa-input.component.html',
  styleUrls: ['./dmd-fa-input.component.css']
})
export class InputFAComponent implements AfterContentInit {
  ngAfterContentInit(): void {
    if(!this.input){
      console.error('the dmd-fa-input needs an input inside its content');
    }
  }

  @Input()
  icon:string

  @ContentChild(InputRefDirective)
  input:InputRefDirective;

  get classes(){
    const cssClasses ={
      'fa': true
    };

    if(this.icon){
      cssClasses['fa-'+ this.icon]=true;
    }

    return cssClasses;

  }

  @HostBinding('class.input-focus')
  get isInputFoccus(){
    return this.input?this.input.focus:false;
  }

}
