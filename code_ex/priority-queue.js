function PriorityQueue () {
    this.collection = [['kitten', 2], ['dog', 2], ['human', 1], ['rabbit', 2]];
    this.printCollection = function() {
      console.log(this.collection);
    };
    // Only change code below this line
    this.isEmpty = function() {
      return this.collection.length === 0;
    }
    
    this.size = function() {
      return this.collection.length;
    }
    
    this.front = function() {
      return this.collection[0][0];
    }
  
    this.enqueue = function (newitem) {
        if (this.isEmpty()) {
          return this.collection.push(newitem);
        }
    
        this.collection = this.collection.reverse();
        var found_index = this.collection.findIndex(function (item) {
          return newitem[1] >= item[1];
        });
        console.log(found_index);
        if (found_index === -1) {
            this.collection.push(newitem);
        } else {
            this.collection.splice(found_index, 0, newitem);
        }

        this.collection = this.collection.reverse();
      };
  
    this.dequeue = function() {
        if (!this.isEmpty()) {
            return this.collection.shift()[0];
          } else {
            return "The queue is empty.";
          }
    }
    // Only change code above this line
}

const queue = new PriorityQueue();
console.log(queue.dequeue());