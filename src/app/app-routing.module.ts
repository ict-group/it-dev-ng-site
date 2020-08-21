import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DevelopersComponent } from "./developers/developers.component";
import { DeveloperDetailComponent } from "./developer-detail/developer-detail.component";
import { PodcastsComponent } from "./podcasts/podcasts.component";
import { PodcastDetailComponent } from "./podcast-detail/podcast-detail.component";
import { BlogComponent } from "./blog/blog.component";
import { BlogDetailComponent } from "./blog-detail/blog-detail.component";
import { AboutComponent } from "./about/about.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "developers", component: DevelopersComponent },
  { path: "podcasts", component: PodcastsComponent },
  { path: "blog", component: BlogComponent },
  { path: "about", component: AboutComponent },

  { path: "developer-detail/:id", component: DeveloperDetailComponent },
  { path: "podcast-detail/:id", component: PodcastDetailComponent },
  { path: "blog-detail/:id", component: BlogDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
