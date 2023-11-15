import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./website/home/home.component";
import {ContactUsComponent} from "./website/contact-us/contact-us.component";
import {AboutComponent} from "./website/about/about.component";
import { NewsComponent } from './website/news/news.component';

const routes: Routes = [
  { path: '' , component: HomeComponent },
  { path: 'contactUs', component: ContactUsComponent},
  { path: 'about', component: AboutComponent },
  { path: 'news', component: NewsComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ]
})
export class AppRoutingModule { }
