// import { Deck, Card } from '@diamoncode/engine';
import { Component, OnInit } from '@angular/core';
import { Action, Card, Deck } from '@diamoncode/engine';

@Component({
  selector: 'diamoncode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-runox';
  card:Card;
  action: Action;

  ngOnInit(){
    this.action = new Action();
    // this.card = new NumericCard();
    new Deck().build();
    // new NumericCard();
  }
}
