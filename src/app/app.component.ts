import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputOne = 'Valor del input One';
  constructor() {
    // this.initTimeoutDemo();
  }

  initTimeoutDemo(): void {
    const dateAtInit = new Date().getSeconds();
    console.log('Antes del timeout:', this.getFormattedDate());

    setTimeout(() => console.log('En el timeout:', this.getFormattedDate()), 0);

    console.log('Después del timeout:', this.getFormattedDate());

    while(true) {
      const now = new Date().getSeconds();
      if(now - dateAtInit >= 2) {
        console.log('Sistema parado por 2 segundos', this.getFormattedDate());
        break;
      }
    }
    console.log('Después del loop:', this.getFormattedDate());
  }

  private getFormattedDate(): string {
    const now = new Date();
    return `Es el segundo ${now.getSeconds()} con ${now.getMilliseconds()} milisegundos`;
  }
}
