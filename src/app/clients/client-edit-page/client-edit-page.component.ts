import { Component, OnInit } from '@angular/core';
import {Client} from '../Client';
import {ClientService} from '../client.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-client-edit-page',
  templateUrl: './client-edit-page.component.html',
  styleUrls: ['./client-edit-page.component.css']
})
export class ClientEditPageComponent implements OnInit {

  // @ts-ignore
  client: Client;
  // get the client ID from the query params

  // then get the client details

  constructor(private clientService: ClientService, private route: ActivatedRoute) { }

  ngOnInit(): void{
    console.log(this.route.snapshot.paramMap.get('id'));
    const clientId = this.route.snapshot.paramMap.get('id');
    // @ts-ignore
    this.clientService.getClientByID(clientId).subscribe((result: Client) => {
      console.log(result);
      this.client = result;
    });
  }

}
