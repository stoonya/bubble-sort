import { Sorter } from "./Sorter";

class Node {
  next: Node | null = null;
  constructor(public value: number) {}
}

export class LinkedList extends Sorter {
  head: Node | null = null;
  
  add(value: number): void {
    
    const node = new Node(value);
    let tail = this.head;

    if (!tail) {
      this.head = node;
      return;
    }

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
  }

  print (): void {

    let tail: Node | null = this.head;

    if (!tail) {
      console.log('This linked list is empty')
      return;
    }
    
    while (tail) {
      console.log(tail.value);
      tail = tail.next;
    }
  }

  get length(): number {
    
    let tail: Node | null = this.head;

    if (!tail) {
      return 0;
    }

    let length = 1;

    while (tail.next) {
      length++;
      tail = tail.next;
    }

    return length;
  }

  at(index: number): Node {

    let tail: Node | null = this.head;
    
    if (!tail) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;

    while (tail) {
      if (counter === index) {
        return tail;
      }

      counter++;
      tail = tail.next;
    }

    throw new Error('Index out of bounds');
  }

  compare (leftIndex: number, rightIndex: number): boolean {
    
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).value > this.at(rightIndex).value;
  }

  swap (leftIndex: number, rightIndex: number): void {

    if (!this.head) {
      throw new Error('List is empty');
    }

    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.value;
    leftNode.value = rightNode.value;
    rightNode.value = leftHand;
  }
}