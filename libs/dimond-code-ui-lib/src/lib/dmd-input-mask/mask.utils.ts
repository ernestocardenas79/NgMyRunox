export const TAB = 9,
  LEFT_ARROW = 37,
  RIGHT_ARROW = 39,
  BACKSPACE = 8,
  DELETE = 46;

export const SPECIAL_CHARACTERS = [' ', '/', '(', ')', '+', '/', '-'];

export function overWriteCharAtPosition(
  element: HTMLInputElement,
  position: number,
  key: string
): void {
  const currentValue = element.value;

  element.value =
    currentValue.slice(0, position) + key + currentValue.slice(position + 1);
}
