import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ResourcesComponent } from './resources/resources.component';
import { PostsComponent } from './posts/posts.component';
import { CalendarComponent } from './calendar/calendar.component';
import { HomeworkComponent } from './homework/homework.component';
import { ExtrasComponent } from './extras/extras.component';
// Add any other Angular Material modules you need

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    PostsComponent,
    CalendarComponent,
    HomeworkComponent,
    ExtrasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    MatDatepickerModule,
    // Add any other Angular Material modules here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
