import { LinkedList } from "./LinkedList.js";

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
    return hashCode;
  }

  set(key, value) {
    const hashCode = this.hash(key);
    const list = this.buckets[hashCode];
    if (list) {
      // Check if key in bucket and update value.
      for (let n = 0; n < list.size; n++) {
        const node = list.at(n).value;
        if (node[KEY_INDEX] === key) {
          node[VAL_INDEX] = value;
          console.log("Updated value of " + key);
          return;
        }
      }
      // If key not in bucket, append it to the list
      list.append([key, value]);
      console.log("Collision: added new key " + key + " to the bucket");
      this.lengthCounter++;
    } else {
      this.buckets[hashCode] = new LinkedList();
      this.buckets[hashCode].append([key, value]);
      this.lengthCounter++;
    }
  }

  get(key) {
    const hashCode = this.hash(key);
    const list = this.buckets[hashCode];
    for (let n = 0; n < list.size; n++) {
      const node = list.at(n).value;
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
