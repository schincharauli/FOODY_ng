import { Component, OnInit } from '@angular/core';
import {NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap'

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class SliderComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  constructor() {}

  images = [ '../../assets/mogshivda.png', '../../assets/modzebne-1.png', '../../assets/sheukvetee.png', '../../assets/mogitant.png',]
}
