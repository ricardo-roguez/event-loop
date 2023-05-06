import {Component, Input} from '@angular/core';
import { MySuperClass } from '../my-super-class';

@Component({
  selector: 'app-timeout',
  standalone: true,
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent extends MySuperClass<string> {
  @Input() inputOne: string = '';

  constructor() {
    super();
    console.log('En el timeoutComponent pero fuera del timeOut: ', this.inputOne);
    this.setData(this.inputOne);
    this.logValue();


    // setTimeout(() => {
    //   console.log('En el timeoutComponent pero dentro del timeOut: ', this.inputOne);
    //   this.setData(this.inputOne);
    //   this.logValue();
    // }, 0);
  }
}
