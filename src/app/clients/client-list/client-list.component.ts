import {Component, Input} from '@angular/core';
import {Router} from '@angular/router';
import {Client} from '../Client';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent {

  @Input()
  // @ts-ignore
  clients: Client[];

  constructor(private router: Router) {}

  viewClientDetails(client: Client): any {
    this.router.navigateByUrl('/clients/details/' + client.id);
  }

}
