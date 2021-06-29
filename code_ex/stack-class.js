function Stack() {
    var collection = [];
    this.print = function() {
      console.log(collection);
    };

    this.isEmpty = function() {
      return collection.length === 0;
    }

    this.clear = function() {
      collection = [];
      return this;
    }

    this.push = function(element) {
      collection = [...collection, element];
      return this;
    }

    this.pop = function() {
      if(collection.length) {
        return collection.pop();
      }  
      return null;
    }

    this.peek = function() {
      if(collection.length) {
        return collection[collection.length - 1];
      }  
      return null;
    }

  }