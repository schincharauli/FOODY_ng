import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';


@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  public constructor(private titleService: Title,
    private route: ActivatedRoute) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
  }

}
