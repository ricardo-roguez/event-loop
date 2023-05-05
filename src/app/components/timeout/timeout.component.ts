import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-timeout',
  standalone: true,
  templateUrl: './timeout.component.html',
  styleUrls: ['./timeout.component.scss']
})
export class TimeoutComponent {
  @Input() inputOne: string = '';

  constructor() {
    console.log('En el timeoutComponent pero fuera del timeOut: ', this.inputOne);
    setTimeout(() => console.log('En el timeoutComponent pero dentro del timeOut component: ', this.inputOne));
  }
}
