import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toHome(){
    document.getElementById("home")?.scrollIntoView();
  }

  toFeatures(){
    document.getElementById("features")?.scrollIntoView();
  }
  toServices(){
    document.getElementById("services")?.scrollIntoView();
  }
  toTestimonials(){
    document.getElementById("testimonials")?.scrollIntoView();
  }
  toContact(){
    document.getElementById("contact")?.scrollIntoView();
  }


}

