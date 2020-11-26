import { Card } from '@diamoncode/engine';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'diamoncode-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'my-runox';
  card:Card;

  ngOnInit(){
    this.card = new Card();
  }
}
