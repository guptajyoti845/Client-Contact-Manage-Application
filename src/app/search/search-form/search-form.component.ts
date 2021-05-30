import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {
  // @ts-ignore
  searchField: string;

  @Input()
    // @ts-ignore
  title: string;

  @Output()
  searchEvent: EventEmitter<string> = new EventEmitter();

  onSubmit(): any {
    this.searchEvent.emit(this.searchField);
  }

}
