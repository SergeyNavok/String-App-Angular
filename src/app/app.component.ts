import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'String APP';

  public myWord: string[] = ['Вася', 'домой', 'шел', 'Пупкин', 'бежал', 'за пивком', 'в школу'];

  public selectValue: string;

  public onSelect(myWord: string): void {
    this.selectValue = myWord;
  }
}
