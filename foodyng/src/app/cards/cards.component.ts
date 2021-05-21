import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';





@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})

export class CardsComponent implements OnInit {
  http: any;
  totalAngularPackages: any;


  constructor(private httpClient: HttpClient){  }

  
  ngOnInit() {      
   
}
  
}
