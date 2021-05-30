import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  // @ts-ignore
  searchField: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log(this.searchField);
  }

}
