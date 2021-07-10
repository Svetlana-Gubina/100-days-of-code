var called = 0;
var hash = string => {
  called++;
  var hashed = 0;
  for (var i = 0; i < string.length; i++) {
    hashed += string.charCodeAt(i);
  }
  return hashed;
};
var HashTable = function() {
  this.collection = {};
  // Only change code below this line
  this.add = function(key, val) {
    const hashKey = hash(key);
    if (!this.collection.hasOwnProperty(hashKey)) {
      this.collection[hashKey] = {};
    }
    this.collection[hashKey][key] = val;
  }

  this.remove = function(key) {
    const hashKey = hash(key);
    if (this.collection[hashKey].hasOwnProperty(key)) {
      delete this.collection[hashKey][key];
    }
    if (!Object.keys(this.collection[hashKey]).length) {
      delete this.collection[hashKey];
    }
  }

  this.lookup = function(key) {
    const hashKey = hash(key);
    if (this.collection.hasOwnProperty(hashKey)) {
      return this.collection[hashKey][key];
    }
    return null;
  }

  // Only change code above this line
};