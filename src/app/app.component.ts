import { Component } from '@angular/core';
import { PageHeaderNavigationItem } from '@ux-aspects/ux-aspects';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  mastheadItems: PageHeaderNavigationItem[] = [
    {
      title: 'Button',
      routerLink: '/button',
    },
    {
      title: 'Input Controls',
      routerLink: '/input-controls',
    },
    {
      title: 'Select',
      routerLink: '/select',
    },
    {
      title: 'Alert',
      routerLink: '/alert',
    },
  ];
}
