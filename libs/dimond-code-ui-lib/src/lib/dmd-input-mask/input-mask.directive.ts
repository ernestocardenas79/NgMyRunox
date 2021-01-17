import { maskDigitValidators, neverValidator } from './digit_validators';
import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnInit,
} from '@angular/core';
import * as Includes from 'lodash.includes';
import * as findLastIndex from 'lodash.findlastindex';
import * as findIndex from 'lodash.findindex';
import {
  BACKSPACE,
  DELETE,
  LEFT_ARROW,
  overWriteCharAtPosition,
  RIGHT_ARROW,
  SPECIAL_CHARACTERS,
  TAB,
} from './mask.utils';

@Directive({
  selector: '[dmd-mask]',
})
export class InputMaskDirective implements OnInit {
  @Input('dmd-mask')
  mask: string;

  input: HTMLInputElement;
  character: string[];

  fullFieldSelected: boolean;

  constructor(el: ElementRef) {
    this.input = el.nativeElement;
  }

  ngOnInit() {
    this.character = this.mask.split('');

    this.input.value = this.placeHolderBuilder();
  }

  @HostListener('select', ['$event'])
  onSelect() {
    this.fullFieldSelected =
      this.input.selectionStart === 0 &&
      this.input.selectionEnd === this.input.value.length;
  }

  @HostListener('keydown', ['$event', '$event.keyCode'])
  onKeyDown($event: KeyboardEvent, keyCode) {
    if ($event.metaKey || $event.ctrlKey) {
      return;
    }

    if (keyCode !== TAB) {
      $event.preventDefault();
    }

    const key = String.fromCharCode(keyCode),
      cursorPosition = this.input.selectionStart;

    if (this.fullFieldSelected) {
      this.input.value = this.placeHolderBuilder();

      const firstPlaceHolderPos = findIndex(
        this.input.value,
        (char) => char === '_'
      );

      this.input.setSelectionRange(firstPlaceHolderPos, firstPlaceHolderPos);
    }

    switch (keyCode) {
      case LEFT_ARROW:
        this.handleLeftArrow(cursorPosition);
        return;

      case RIGHT_ARROW:
        this.handleRightArrow(cursorPosition);
        return;
      case BACKSPACE:
        this.handleBackspace(cursorPosition);
        return;
      case DELETE:
        this.handleDelete(cursorPosition);
        return;
    }

    const maskDigit = this.mask.charAt(cursorPosition),
      digitValidator = maskDigitValidators[maskDigit] || neverValidator;

    if (digitValidator(key)) {
      overWriteCharAtPosition(this.input, cursorPosition, key);
      this.handleRightArrow(cursorPosition);
    }
  }

  handleDelete(cursorPosition) {
    overWriteCharAtPosition(this.input, cursorPosition, '_');
    this.input.setSelectionRange(cursorPosition, cursorPosition);
  }

  handleBackspace(cursorPosition) {
    const previousPos = this.calculatePreviosCursorPosition(cursorPosition);

    if (previousPos >= 0) {
      overWriteCharAtPosition(this.input, previousPos, '_');
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  handleLeftArrow(cursorPosition) {
    const previousPos = this.calculatePreviosCursorPosition(cursorPosition);
    if (previousPos >= 0) {
      this.input.setSelectionRange(previousPos, previousPos);
    }
  }

  calculatePreviosCursorPosition(cursorPosition) {
    const valuBeforeCursor = this.input.value.slice(0, cursorPosition);

    return findLastIndex(
      valuBeforeCursor,
      (char) => !Includes(SPECIAL_CHARACTERS, char)
    );
  }

  handleRightArrow(cursorPosition) {
    const valuAfterCursor = this.input.value.slice(cursorPosition + 1);

    const nextPos = findIndex(
      valuAfterCursor,
      (char) => !Includes(SPECIAL_CHARACTERS, char)
    );

    if (nextPos >= 0) {
      const newCursorPos = cursorPosition + nextPos + 1;
      this.input.setSelectionRange(newCursorPos, newCursorPos);
    }
  }

  placeHolderBuilder(): string {
    return this.character.reduce(
      (placeholder, char) =>
        (placeholder += Includes(SPECIAL_CHARACTERS, char) ? char : '_'),
      ''
    );
  }
}
