const KEY_INDEX = 0;
const VAL_INDEX = 1;

export class HashMap {
  constructor() {
    this.loadFactor = 0.75;
    this.capacity = 16;
    this.buckets = [];
    this.lengthCounter = 0;
  }

  hash(key) {
    let hashCode = 0;
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = (primeNumber * hashCode + key.charCodeAt(i)) % this.capacity;
    }
    console.log(`Hash code of ${key}: ${hashCode}`);
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const node = this.buckets[hashCode];
    if (node) {
      if (node[KEY_INDEX] === key) {
        node[VAL_INDEX] = value;
      } else {
        console.log(`Collision: (${key}, ${value}) could not be stored.`);
      }
    } else {
      this.buckets[hashCode] = [key, value];
      this.lengthCounter++;
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    const node = this.buckets[hashCode];
    if (node) {
      if (node[KEY_INDEX] === key) {
        return node;
      }
    }
    return null;
  }

  has(key) {
    const node = this.get(key);
    return node ? true : false;
  }

  length() {
    return this.lengthCounter;
  }
}
