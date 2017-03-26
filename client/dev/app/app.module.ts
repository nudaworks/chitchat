// imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {Http, Headers, RequestOptions, HttpModule, ConnectionBackend} from '@angular/http';

// modules declarations
import { AppRoutingModule } from "./app-routing.module";

// components declarations
import { AppComponent } from "./app.component";
// import { HomeComponent } from './home/home.component';
// import { ProfilesComponent } from './profiles/profiles.component';
// import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
// import { NavComponent } from "./nav/nav.component";
// import { NavItemComponent } from "./nav/nav-item/nav-item.component";
// import { HeaderComponent } from "./header/header.component";
// import { FooterComponent } from "./footer/footer.component";
// import { HomeCarouselComponent } from "./home/home-carousel/home-carousel.component";
// import { HomeCarouselItemComponent } from "./home/home-carousel/home-carousel-item/home-carousel-item.component";

// pipes declarations
import { FilterPipe } from './shared/pipes/filter.pipe';
import { OrderByPipe } from './shared/pipes/order-by.pipe';





// services desclarations
// import { PlanetsService } from './planets/planets.service';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpModule
  ],
  declarations: [
    AppComponent,

    // header
    // HeaderComponent,
    // HomeComponent,
    // OffcanvasMenuComponent,
    // OffcanvasMenuItemComponent,
    // LogoComponent,
    // SearchBarComponent,
    // AuthButtonComponent,
    // AuthModalComponent,

    // home
    // HomeCarouselComponent,
    // HomeCarouselItemComponent,
    // CelebCarouselComponent,
    // CelebCarouselItemComponent,

    // profiles
    // ProfilesComponent,

    // nav
    // NavComponent,
    // NavItemComponent,

    // footer
    // FooterComponent,
    // FooterNavComponent,
    // FooterNavItemComponent,
    // FooterSocialsComponent,
    // FooterSocialsItemComponent,


    // shared
    FilterPipe,
    OrderByPipe,
    // PageNotFoundComponent,
    // RelatedComponent,
    // RelatedItemComponent,
    // LatestNewsCarouselComponent,
    // LatestNewsCarouselItemComponent


  ],
  bootstrap: [
    AppComponent
  ],
  providers: [
    // NewsService,
    // StaticDataService,
    // MockDataService,
    // ApiConfig
  ]
})

export class AppModule {}
