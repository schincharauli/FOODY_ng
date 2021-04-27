import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './homepage/header/header.component';
import { HowTWorksComponent } from './homepage/how-t-works/how-t-works.component';
import { SliderComponent } from './homepage/slider/slider.component';
import { PopularRestaurantsComponent } from './homepage/popular-restaurants/popular-restaurants.component';
import { RecomendedComponent } from './homepage/recomended/recomended.component';
import { TestimoniesComponent } from './homepage/testimonies/testimonies.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HowItWorksComponent } from './cards/how-it-works/how-it-works.component';
import { RestaurantsComponent } from './cards/restaurants/restaurants.component';
import { TestemoniesCardComponent } from './cards/testemonies-card/testemonies-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    HowTWorksComponent,
    SliderComponent,
    PopularRestaurantsComponent,
    RecomendedComponent,
    TestimoniesComponent,
    FooterComponent,
    HowItWorksComponent,
    RestaurantsComponent,
    TestemoniesCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
