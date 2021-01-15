import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <app-header></app-header>
    <div class="container mt-2">
      <router-outlet></router-outlet>
    </div>
    <app-footer></app-footer>
  `,
})
export class DashboardComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
