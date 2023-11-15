import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './website/home/home.component';
import {RouterOutlet} from "@angular/router";
import { NavbarComponent } from './website/navbar/navbar.component';
import { ContactUsComponent } from './website/contact-us/contact-us.component';
import { AboutComponent } from './website/about/about.component';
import { NewsComponent } from './website/news/news.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ContactUsComponent,
    AboutComponent,
    NewsComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        RouterOutlet
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
