function LinkedList() {
    var length = 0;
    var head = null;
  
    var Node = function(element){
      this.element = element;
      this.next = null;
    };
  
    this.head = function(){
      return head;
    };
  
    this.size = function(){
      return length;
    };
  
    this.add = function(element){
      // Only change code below this line
      function findNull(node){
      if(node.next === null) {
          return node;
      }
      return findNull(node.next);
      }
  
      var newItem = new Node(element);
      if(!head){
        head = newItem;
        length++;
      } else {
        const lastNode = findNull(head);
        lastNode.next = newItem;
        length++;
      }
      // Only change code above this line
    };
  }