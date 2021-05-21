import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteFrameworkComponent } from './site-framework/site-framework.component';



@NgModule({
  declarations: [
    SiteFrameworkComponent
  ],
  imports: [
    CommonModule
  ], 
  exports: [
    SiteFrameworkComponent
  ]
})
export class SiteFrameworkModule { }
