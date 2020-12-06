import { Color } from '../enums/color';
import { TakeOneAction } from './actions/takeOneAction';
import { Card } from './cards/card';
import { NumericCard } from './cards/numericCard';

/**
 *
 */
export class Deck {
  cards: Card[] = [];
  takeOne = new TakeOneAction();

  build() {
    const numericBlue: NumericCard[]= [];
    for (let number = 1; number < 3; number++) {
      numericBlue.push(new NumericCard(this.takeOne, Color.BLUE, number));
    }

    const numericRed: NumericCard[] = numericBlue.map(
      (c) => <NumericCard>{ ...c, color: Color.GREEN }
    );
    const numericGreen: NumericCard[] = numericBlue.map(
      (c) => <NumericCard>{ ...c, color: Color.GREEN }
    );
    const numericYellow: NumericCard[] = numericBlue.map(
      (c) => <NumericCard>{ ...c, color: Color.YELLOW }
    );
    this.cards= [...numericGreen, ...numericYellow, ...numericRed, ...numericBlue];
    console.log(this.cards);
  }

  // Object.values(Color).forEach(color =>{
  //   if(typeof color === 'number' ){
  //     console.log(color,Color[color]);
  //   }
  // })
}
