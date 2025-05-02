import { Routes } from '@angular/router';
import { StoriesComponent } from './stories/stories.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'stories', component: StoriesComponent }
];