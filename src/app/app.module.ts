import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HerdComponent } from './herd/herd.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ForSaleComponent } from './for-sale/for-sale.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'sale', component: ForSaleComponent},
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
    PageNotFoundComponent,
    ForSaleComponent
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
