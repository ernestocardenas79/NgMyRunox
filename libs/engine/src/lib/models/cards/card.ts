import { Color } from '../enums/color';
import { Action } from './actions/action';

export class Card {
    /**
     * carta de un mazo
     */
    constructor(public action: Action, public color: Color, public points: number) {
    }
}
