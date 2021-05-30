import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Client} from '../Client';

@Component({
  selector: 'app-client-detail',
  templateUrl: './client-detail.component.html',
  styleUrls: ['./client-detail.component.css']
})
export class ClientDetailComponent {
  editView = false;

  @Input()
  // @ts-ignore
  client: Client;

  @Output()
  searchEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  editEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  deleteEvent: EventEmitter<Client> = new EventEmitter();

  @Output()
  saveEvent: EventEmitter<Client> = new EventEmitter();

  searchAll(): void {
    this.searchEvent.emit();
  }

  edit(): void {
    this.toggleEdit();
  }

  delete(client: Client): void {
    this.deleteEvent.emit(client);
  }

  save(): void {
    this.saveEvent.emit(this.client);
    this.toggleEdit();
  }

  private toggleEdit(): void {
    this.editView = !this.editView;
  }
}
