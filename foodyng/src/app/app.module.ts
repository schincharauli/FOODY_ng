import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{FormsModule}from '@angular/forms';
import{HttpClientModule} from '@angular/common/http';

import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { SliderComponent } from './slider/slider.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FeaturesComponent } from './features/features.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CardsComponent } from './cards/cards.component';
import {ServiceComponent} from './service/service.component'





@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    NavigationComponent,
    FeaturesComponent,
    TestimonialsComponent,
    FooterComponent,
    routingComponents,
    HomeComponent,
    CardsComponent,
    ServiceComponent
    
  ], 
  
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
