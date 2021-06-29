function Queue() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };
    
    this.isEmpty = function() {
      return collection.length === 0;
    }
  
    this.size = function() {
      return collection.length;
    }
  
    this.front = function() {
      return collection[0];
    }
  
    this.enqueue = function(elemet) {
      collection = [...collection, elemet];
      return this;
    }
  
    this.dequeue = function() {
      return collection.shift();
    }
  
  }