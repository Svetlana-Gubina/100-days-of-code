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
      let union = [...this.values()];
      console.log(union);
    }
    // Only change code above this line
}

const setA = new Set();
setA.add('a');
setA.add('b');
setA.add('c');

const setB = new Set();
setB.add('a');
setB.add('b');
setB.add('d');
setB.add('e');

console.log(setA.union(setB));