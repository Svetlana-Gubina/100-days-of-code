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

      // this.add = function(element){
        // var node = new Node(element);
        // if(head === null){
            // head = node;
        // } else {
          // var currentNode = head;
          // while(currentNode.next){
            // currentNode  = currentNode.next;
          // }
          // currentNode.next = node;
        // }
        // length++;
      // };

    this.remove = function(element){
        if(head.element === null){
          throw new Error('No nodes in list');
      }
  
      if(element === head.element) {
          let newHead = head.next;
          head = newHead;
          return length--;
      }  

      
    };
    };
  }