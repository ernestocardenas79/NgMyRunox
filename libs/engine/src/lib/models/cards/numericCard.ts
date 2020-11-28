import { Card } from '@diamoncode/engine';
import { Color } from '../enums/color';
import { Action } from './actions/action';

export class NumericCard extends Card {
    /**
     *
     */
    constructor(public action: Action, public color: Color, public points: number) {
      super(action, color, points);
    }
}
