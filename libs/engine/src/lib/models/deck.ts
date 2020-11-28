import { Color } from '../enums/color';
import { TakeOneAction } from './actions/takeOneAction';
import { Card } from './cards/card';
import { NumericCard } from './cards/numericCard';

/**
*
*/
export class Deck {
   cards: Card[];

   build(){
      const takeOne = new TakeOneAction();

      const oneGreenCard = new NumericCard(takeOne, Color.BLUE, 10);
   }
}
