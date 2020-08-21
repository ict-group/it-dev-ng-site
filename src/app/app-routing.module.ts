import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { DevelopersComponent } from "./developers/developers.component";
import { DeveloperDetailComponent } from "./developer-detail/developer-detail.component";
import { PodcastsComponent } from "./podcasts/podcasts.component";
import { PodcastDetailComponent } from "./podcast-detail/podcast-detail.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "developers", component: DevelopersComponent },
  { path: "podcasts", component: PodcastsComponent },

  { path: "developer-detail/:id", component: DeveloperDetailComponent },
  { path: "podcast-detail/:id", component: PodcastDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
