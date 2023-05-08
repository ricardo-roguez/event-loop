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
    console.log('[Sistema] Antes del timeout:', this.getFormattedTime());

    setTimeout(() => console.log('[Sistema] En el timeout:', this.getFormattedTime()), 3000);

    console.log('[Sistema] Después del timeout:', this.getFormattedTime());

    this.sleep(2000);
    
    console.log('[Sistema] Final del programa:', this.getFormattedTime());
  }

  private getFormattedTime(): string {
    const now = new Date();
    return `Es el segundo ${now.getSeconds()} con ${now.getMilliseconds()} milisegundos`;
  }

  private sleep(milliseconds: number): void {
    const date = Date.now();
    let currentDate = null;
    do {
      currentDate = Date.now();
    } while (currentDate - date < milliseconds);
    console.log('[Sistema] Fin del sleep', this.getFormattedTime());
  }
}
