import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.scss']
})


export class FieldComponent {
  @Input() public myWord: string;
  @Output() public selectWord = new EventEmitter<string>();

  public selectValue(): void {
    this.selectWord.next(this.value);
  }
}
