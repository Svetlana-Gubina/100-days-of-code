class CircularQueue {
    constructor(size) {
  
      this.queue = [];
      this.read = 0;
      this.write = 0;
      this.max = size - 1;
  
      while (size > 0) {
        this.queue.push(null);
        size--;
      }
    }
  
    print() {
      return this.queue;
    }
  
    enqueue(item) {
      // Only change code below this line
      if (this.queue[this.write] === null) {
        this.queue[this.write] = item;
        this.write++;
        if(this.write > this.max) {
          this.write = 0;
        } 
        return item;
      }
      return null;
      
      // Only change code above this line
    }
  
    dequeue() {
      // Only change code below this line
      if (this.queue[this.read] != null) {
        let itemToRemove = this.queue[this.read];
        this.queue[this.read] = null;
        this.read++;
        if(this.read > this.max) {
          this.read = 0;
        } 
        return itemToRemove;
      }
      return null;
      // Only change code above this line
    }
}

const circularQueue = new CircularQueue(5);
circularQueue.enqueue(3);
circularQueue.enqueue(6);
circularQueue.enqueue(9);
console.log(circularQueue.dequeue());
console.log(circularQueue.print());
