export class ShuffleCollection<T> {
  items: Array<T> = [];
  length() {
    return this.items.length;
  }
  [Symbol.iterator]() {
    const getRange = (n: number) => Array.from(new Array(n), (_, i) => i); // [0, n)
    const shuffle = (arr: any[]) => { // Durstenfeld shuffle
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
      return arr;
    };

    let i = 0;
    const indices = shuffle(getRange(this.length()));

    return {
      next: () => {
        return {
          value: this.items[indices[i++]],
          done: i > this.length()
        }
      }
    }
  }
}

