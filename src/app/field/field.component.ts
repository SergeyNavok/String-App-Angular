import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: 'app-field',
  templateUrl: 'field.component.html',
  styleUrls: ['field.component.scss']
})


export class FieldComponent {
  @Input() public value: string;
  @Output() public selectEvent = new EventEmitter<string>();

  public selectValue(): void {
    this.selectEvent.next(this.value);
  }
}
