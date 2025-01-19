import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  standalone: false,
  templateUrl: './searchBox.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
})
export class SearchBoxComponent {
  emitValue(value: string):void {
    this.onValue.emit(value);
  } 
  @Input() 
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();
}
