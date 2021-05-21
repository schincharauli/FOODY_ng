import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [  
  {path: '', component: HomeComponent},
  {path: 'cards', component: CardsComponent},
  {path: '', component: PageNotFoundComponent},
  { path: 'products', loadChildren: () => import('./products/products.module').then(m => m.ProductsModule) }

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ CardsComponent]
