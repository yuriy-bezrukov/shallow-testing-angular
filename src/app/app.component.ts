import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'shallow-testing-angular';

  onColorCalc(rgb: string) {
    this.title = `new color ${rgb}`;
  }
}
