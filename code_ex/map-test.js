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
  this.add = function(key, value) {
    let hashKey = hash(key);
    this.collection[hashKey] = {
      key: value
    };
  }

  this.remove = function(key) {
    let hashKey = hash(key);
    if(this.collection[hashKey].hasOwnProperty(key) && Object.keys(this.collection[hashKey]).length < 2) {
      delete this.collection[hashKey];
    } else if(this.collection[hashKey].hasOwnProperty(key) && Object.keys(this.collection[hashKey]).length > 1){
      delete this.collection[hashKey][key];
    } else {
      return;
    }
  }

  this.lookup = function(key) {
    let hashKey = hash(key);
    if(this.collection[hashKey].hasOwnProperty(key)) {
      return this.collection[hashKey][key];
    } else {
      return null;
    }
  }

  // Only change code above this line
};