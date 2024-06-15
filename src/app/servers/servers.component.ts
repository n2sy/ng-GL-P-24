import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrl: './servers.component.css',
})
export class ServersComponent {
  allServers = [
    {
      name: 'Production Server',
      type: 'small',
      date_d: new Date(),
      statut: 'critical',
    },
    {
      name: 'Test Server',
      type: 'small',
      date_d: new Date(),
      statut: 'stable',
    },
    {
      name: 'GServer',
      type: 'small',
      date_d: new Date(),
      statut: 'offline',
    },
    {
      name: 'Tekup Server',
      type: 'large',
      date_d: new Date(),
      statut: 'stable',
    },
  ];

  affecterClass(st) {
    return {
      'list-group-item-success': st == 'stable',
      'list-group-item-danger': st == 'critical',
      'list-group-item-warning': st == 'offline',
    };
  }
}
