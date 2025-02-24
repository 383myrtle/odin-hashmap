export class HashMap {
  constructor() {
    this.loadFactor = 0.7;
    this.capacity = 16;
    this.buckets = [];
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
    this.buckets[hashCode] = value;
  }

  get(key) {
    const hashCode = this.hash(key);
    const val = this.buckets[hashCode];
    return val ? val : null;
  }
}
