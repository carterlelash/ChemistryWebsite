import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

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
import {MatGridList, MatGridListModule} from '@angular/material/grid-list';
import { HomeComponent } from './home/home.component';
import { MatCard, MatCardModule } from '@angular/material/card';
import { MatTreeModule } from '@angular/material/tree';
import { MatChip, MatChipsModule } from '@angular/material/chips';
import { CdkTreeModule } from '@angular/cdk/tree';


// Add any other Angular Material modules you need

const routes: Routes = [
  { path: 'home', component: AppComponent },
  { path: 'resources', component: ResourcesComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    ResourcesComponent,
    PostsComponent,
    CalendarComponent,
    HomeworkComponent,
    ExtrasComponent,
    HomeComponent,
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
    MatGridListModule,
    MatCardModule,
    RouterModule.forRoot(routes),
    MatTreeModule,
    MatChipsModule,
    CdkTreeModule,
    // Add any other Angular Material modules here
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
