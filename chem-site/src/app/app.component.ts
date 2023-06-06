import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  componentToLoad: string = 'home'; // Default component to load

  loadComponent(component: string) {
    this.componentToLoad = component;
  }
}
