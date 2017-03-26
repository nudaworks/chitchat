// imports
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// component declarations
import { HomeComponent } from './home/home.component';
import { ProfilesComponent } from './profiles/profiles.component';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'profiles/filter/:filterBy', component: ProfilesComponent },
      { path: 'search', component: ProfilesComponent },
      { path: 'search/:searchBy', component: ProfilesComponent },
      { path: '**', component: PageNotFoundComponent },
    ])
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule { }
