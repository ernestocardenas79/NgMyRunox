import { Color } from '../enums/color';

export class Card {
    /**
     * carta de un mazo
     */
    constructor(public action: Action, public color: Color, public points: number) {
    }
}
