import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from '../src/app/home/home.component';
import { AboutComponent } from '../src/app/about/about.component';
import { HerdComponent } from '../src/app/herd/herd.component';
import { PageNotFoundComponent } from '../src/app/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'herd', component: HerdComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    HerdComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
