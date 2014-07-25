var makeLinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    //adding to tail, add new node as list.tail
    //update the null value from the previous list.tail
    if(list.head === null){
      list.head = makeNode(value);
      list.tail = list.head
    } else {
      var link = list.tail;
      list.tail = makeNode(value);
      link.next = list.tail;
    };
  };

  list.removeHead = function(){
    //remove first thing we added - set to list.head
    //once list.head is deleted, next node should become list.head
    //previous list.head.next is the next node that should become list.head
    var previousHead = list.head.value;
    var nextHead = list.head.next;
    delete list.head;
    list.head = nextHead;
    return previousHead;

  };

  list.contains = function(target, obj){
    //check if the target is in any of the nodes
    // list.head.value === target
    // if it doesn't => move to list.head.next (unless .next === null)
    // list.head.next.value === target
    // if it doesn't => move to list.head.next.next (unless .next === null)
    // list.head.next.next.value == target
    // if it doesn't => move to list.head.next.next.next (unless .next === null)

    obj = obj || list.head;
    if(obj.value === target){
      return true;
    } else if(obj.next === null) {
      return false;
    } else {
        return list.contains(target, obj.next);
    }

  };

  return list;
};

var makeNode = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
