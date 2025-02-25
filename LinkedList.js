import { Node } from "./Node.js";

export class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  set head(newHead) {
    this._head = newHead;
  }
  get head() {
    return this._head;
  }
  set tail(newTail) {
    this._tail = newTail;
  }
  get tail() {
    return this._tail;
  }
  set size(newSize) {
    this._size = newSize;
  }
  get size() {
    return this._size;
  }

  append(value) {
    if (this.size === 0) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const node = new Node(value);
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  prepend(value) {
    if (this.size === 0) {
      this.head = new Node(value);
      this.tail = this.head;
    } else {
      const node = new Node(value);
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  at(index) {
    let n = 0;
    let pointer = this.head;
    while (pointer !== null) {
      if (n === index) {
        return pointer;
      }
      pointer = pointer.next;
      n++;
    }
  }

  contains(value) {
    let pointer = this.head;
    while (pointer !== null) {
      if (value === pointer.value) {
        return true;
      }
      pointer = pointer.next;
    }
    return false;
  }

  find(value) {
    let pointer = this.head;
    let index = 0;
    while (pointer !== null) {
      if (value === pointer.value) {
        return index;
      }
      pointer = pointer.next;
      index++;
    }
    return null;
  }

  insertAt(index, value) {
    const node = new Node(value);
    const prev = this.at(index);
    node.next = prev.next;
    prev.next = node;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }
    const node = this.at(index);
    const prev = this.at(index - 1);
    prev.next = node.next;
    if (index === this.size - 1) {
      this.tail = prev;
    }
  }

  pop() {
    let pointer = this.head;
    const node = this.tail;
    while (pointer !== null) {
      if (pointer.next === node) {
        pointer.next = null;
        this.tail = pointer;
      }
      pointer = pointer.next;
    }
    return node;
  }

  toString() {
    let pointer = this.head;
    let str = "";
    while (pointer !== null) {
      str = str + `(${pointer.value}) -> `;
      pointer = pointer.next;
    }
    str += "null";
    return str;
  }
}
