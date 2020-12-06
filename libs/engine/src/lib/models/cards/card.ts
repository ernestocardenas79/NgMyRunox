import { Color } from '../../enums/color';
import { Action } from '../actions';

export abstract class Card {
    /**
     * carta de un mazo
     */
    constructor(public action: Action, public color: Color, public points: number) {
    }
}
