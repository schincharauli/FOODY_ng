import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { FeaturesComponent } from './features/features.component';
import { FooterComponent } from './footer/footer.component';
import { ServiceComponent } from './service/service.component';
import { SliderComponent } from './slider/slider.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [  
  // {path: 'home', component: SliderComponent},
  // {path: 'features', component: FeaturesComponent},
  // {path: 'service', component: ServiceComponent},
  // {path: 'testimonials', component: TestimonialsComponent},
  // {path: 'footer', component: FooterComponent},
  // {path: 'foodlist', component: CardsComponent }
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ CardsComponent]
