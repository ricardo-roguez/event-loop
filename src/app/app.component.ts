import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  inputOne = 'Valor del input One';
  constructor() {
    this.initTimeoutDemo();
  }

  initTimeoutDemo(): void {
    const dateAtInit = new Date().getSeconds();
    
    console.log('Antes del timeout:', this.getFormattedTime());

    setTimeout(() => console.log('En el timeout:', this.getFormattedTime()), 3000);

    console.log('Después del timeout:', this.getFormattedTime());

    while(true) {
      const now = new Date().getSeconds();
      if(now - dateAtInit >= 2) {
        console.log('Sistema parado por 2 segundos', this.getFormattedTime());
        break;
      }
    }
    console.log('Después del loop:', this.getFormattedTime());
  }

  private getFormattedTime(): string {
    const now = new Date();
    return `Es el segundo ${now.getSeconds()} con ${now.getMilliseconds()} milisegundos`;
  }
}
