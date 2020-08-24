import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {DevelopersComponent} from './developers/developers.component';
import {DeveloperDetailComponent} from './developer-detail/developer-detail.component';
import {InterviewsDetailComponent} from './interviews-detail/interviews-detail.component';
import {BlogComponent} from './blog/blog.component';
import {BlogDetailComponent} from './blog-detail/blog-detail.component';
import {AboutComponent} from './about/about.component';
import {InterviewsComponent} from './interviews/interviews.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'developers', component: DevelopersComponent},
  {path: 'developers/:id', component: DeveloperDetailComponent},
  {path: 'interviews', component: InterviewsComponent},
  {path: 'interviews/:id', component: InterviewsDetailComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'blog/:id', component: BlogDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
