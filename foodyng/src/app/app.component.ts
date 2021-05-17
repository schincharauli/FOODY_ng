import { Component } from '@angular/core';
import{CardsService} from './cards/cards.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  
})
export class AppComponent {
  title = 'foodyng';

  constructor(private card:CardsService){
    this.card.getData().subscribe( (data: any) => {
      console.log(data);
    })
  }
 
}
