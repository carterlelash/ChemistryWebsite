import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "chem-site"
  resources = true;
  posts = false;
  homework = false;
  extras = false;
  calendar = false;


  toggleResources() {
   this.resources = true;
   this.posts = false;
   this.calendar = false;
   this.homework = false;
   this.extras = false;
  }
  toggleHomework() {
    this.resources = false;
    this.posts = false;
    this.calendar = false;
    this.homework = true;
    this.extras = false;
   }
   toggleCalendar() {
    this.resources = false;
    this.posts = false;
    this.calendar = true;
    this.homework = false;
    this.extras = false;
   }
   togglePosts() {
    this.resources = false;
    this.posts = true;
    this.calendar = false;
    this.homework = false;
    this.extras = false;
   }
   toggleExtras() {
    this.resources = false;
    this.posts = false;
    this.calendar = false;
    this.homework = false;
    this.extras = true;
   }
}

