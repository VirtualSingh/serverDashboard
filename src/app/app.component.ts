import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TrafficComponent } from './dashboard/traffic/traffic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  imports: [
    HeaderComponent,
    ServerStatusComponent,
    TrafficComponent,
    TicketsComponent,
    DashboardItemComponent,
  ],
})
export class AppComponent {
  currentStatus = 'online';
  components = [
    {
      title: 'Server Status',
      image: {
        src: 'status.png',
        alt: 'A signal symbol',
      },
    },
    {
      title: 'Traffic',
      image: {
        src: 'globe.png',
        alt: 'A globe',
      },
    },
    {
      title: 'Support Tickets',
      image: {
        src: 'list.png',
        alt: 'A list of items',
      },
    },
  ];
}
