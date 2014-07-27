var makeBinarySearchTree = function(value){
  //left property contains all items less than parent node value
  //right property contains all items greater than parent node value
  //in the property values store the value of the node along with the children
  //parent node{value: 5,
  //            left: {value:  left: right:},
  //            right: {value:  left: right:}
  //            }

  this.value = value;
  this.left = null;
  this.right = null;
};

makeBinarySearchTree.prototype = {
  constructor: makeBinarySearchTree,
  insert: function(value){
    // look at the value of whatever node it's currently at
    // compare the value that's passed in (greater than or less than) to this.value
    if(value > this.value) {
      // && this.right === null => create an object an then insert value into this.right
      this.right === null ? this.right = new makeBinarySearchTree(value) : this.right.insert(value);
      } else {
      this.left === null ? this.left = new makeBinarySearchTree(value) : this.left.insert(value);
      }

      /*if(this.right === null){
        //create our object
        //var obj = {};
        this.right = new makeBinarySearchTree(value);
      } else {
        //this.right.insert(value)
        this.right.insert(value);
      }
    } else {
      //if left (aka if value < this.value)
      if(this.left === null){
        //create our object
        //var obj = {};
        this.left = new makeBinarySearchTree(value);
      } else {
        //this.right.insert(value)
        this.left.insert(value);
      }

    }*/
  },
  contains: function(target) {
    // if(this.value === target) return true
    if (this.value === target) {
      return true
    // first check if the target is greater than this.value
    } else if (target > this.value) {
      if (this.right === null) {
        return false;
      } else {
        // else if(this.value !== null) recurse through passing in this.left or this.right
        return this.right.contains(target);
      }
    } else if (target < this.value) {
      if (this.left === null) {
        return false;
      } else {
        return this.left.contains(target);
      }
    }

    // else return false

  },
  depthFirstLog: function(callback){
    // first perform callback on whatever this.value is
      // (gather this.value for every node)
    callback(this.value);
    // at the current node, perform the callback on this.value
    // if this.left !== null, perform the this.left.depthFirstLog(callback)
    if(this.left !== null){
      this.left.depthFirstLog(callback);
    }
    if(this.right !== null) {
      this.right.depthFirstLog(callback);
    }
    // else if this.right !== null, perform this.right.depthFirstLog(callback)
  }
}


/*
 * Complexity: What is the time complexity of the above functions?
 */
