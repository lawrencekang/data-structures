var makeTree = function(value){
  var newTree = {};
  newTree.value = value;
  newTree.children = undefined;
  _.extend(newTree, treeMethods); // incorporate methods into newTree
  return newTree;
};

var treeMethods = {};


treeMethods.addChild = function(value){
  //if newTree.children = undefined, create a new array
  if (this.children === undefined) {
    var arr = [];
    arr.push(makeTree(value));
    this.children = arr;
  }
  //populate new array with makeTree
    //call a new instance of makeTree in order to create a new node
    //push the makeTree value into the new array
  //else
  else {
    this.children.push(makeTree(value))
  }  //call a new instance of makeTree to create a new node
    //push the makeTree value into the new array
};

treeMethods.contains = function(target){
  //recursively look through tree, look through children nodes
  if(this.value === target) {
    return true
  }else if (this.children !== undefined) {
    for(var i = 0; i < this.children.length; i++){
       if(this.children[i].contains(target)){
        return true
       }
    };
  }
    //continue to loop
  return false;
  //children.length is the number of times to loop through recursively
  //as we loop, check if if there are any children
  //at each node, check if value = target, if so return true
  //if all nodes are searched and no value = target, return false

};



//first makeTree = newTree {value: value, children: undefined}

//newTree.addChild(1) = newTree {value:value, children: [{value:1, children:undefined}] }

/*
 * Complexity: What is the time complexity of the above functions?
 */
