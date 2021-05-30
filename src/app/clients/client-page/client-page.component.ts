import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ClientService} from '../client.service';
import {Client} from '../Client';

@Component({
  selector: 'app-client-page',
  templateUrl: './client-page.component.html',
  styleUrls: ['./client-page.component.css'],
  providers: [ClientService]
})
export class ClientPageComponent implements OnInit {

  // @ts-ignore
  clientList: any[];

  constructor(private router: Router, private clientService: ClientService) { }

  ngOnInit(): any {
    this.clientService.getClients().subscribe((res: any[]) => {
      this.clientList = res;
    });
  }

  saveClient(clientDetails: Client): any {
    this.clientService.save(clientDetails).subscribe((client: any) => {
      this.clientList.push(client);
      this.router.navigateByUrl('/clients/search');
    });
  }

}
