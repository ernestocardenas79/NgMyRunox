import { Action } from '../actions';
import { Color} from '../../enums/color';
import { Card} from './card';


export class NumericCard extends Card {
    /**
     *
     */
    number: number;
    constructor(public action: Action, public color: Color, public points: number) {
      super(action, color, points);
      this.number= points;
    }
}
