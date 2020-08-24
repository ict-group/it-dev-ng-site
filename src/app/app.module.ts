import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {DevelopersComponent} from './developers/developers.component';
import {DeveloperDetailComponent} from './developer-detail/developer-detail.component';
import {MyService} from './services/app.service';
import {TableModule} from 'primeng/table';
import {AccordionModule} from 'primeng/accordion';
import {InterviewsDetailComponent} from './interviews-detail/interviews-detail.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {AboutComponent} from './about/about.component';
import {InterviewsComponent} from './interviews/interviews.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DevelopersComponent,
    DeveloperDetailComponent,
    InterviewsComponent,
    InterviewsDetailComponent,
    BlogComponent,
    BlogDetailComponent,
    AboutComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, TableModule, AccordionModule],
  providers: [MyService],
  bootstrap: [AppComponent],
})
export class AppModule {}
