class Set {
    constructor() {
      // Dictionary will hold the items of our set
      this.dictionary = {};
      this.length = 0;
    }
  
    // This method will check for the presence of an element and return true or false
    has(element) {
      return this.dictionary[element] !== undefined;
    }
  
    // This method will return all the values in the set
    values() {
      return Object.values(this.dictionary);
    }
  
    // Only change code below this line
    add(element) {
      if (!this.has(element)) {
        this.dictionary[element] = element;
        this.length++;
        return true;
      } 
      return false;
    }
  
    remove(element) {
      if (this.has(element)) {
        delete this.dictionary[element];
        this.length--;
        return true;
      } 
      return false;
    }
  
    size() {
      return this.length;
    }
    
    union(anotherSet) {
      let newSet = new Set();
      for(let item of this.values()) {
        newSet.add(item);
      }
      for(let item of anotherSet.values()) {
        newSet.add(item);
      }
      return newSet;
    }

    intersection(anotherSet) {
      let newSet = new Set();
      for(let item of anotherSet.values()) {
        if(this.has(item)) {
          newSet.add(item);
        }
      }
      return newSet;
    }

    difference(anotherSet) {
      let newSet = new Set();
      for(let item of anotherSet.values()) {
        if(!this.has(item)) {
          newSet.add(item);
        }
      }
      return newSet;
    }
    // Only change code above this line
}

const setA = new Set();
setA.add('a');
setA.add('b');
setA.add('c');

const setB = new Set();
setB.add('c');
setB.add('d');

console.log(setA.difference(setB));