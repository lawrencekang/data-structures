var Graph = function(){

};
Graph.prototype.addNode = function(newNode, toNode){
  //need to reference the Graph object using "this"
  //this.addNode(new Node, toNode)
    //adds a key called newNode to Graph
  //if we're adding to toNode
    //search the top level keys for toNode
      //if found, create this.newNode = new Graph();
      //else, for (var key in this) {
        //key.addNode(newNode, toNode)
      //}
      //graph{
        //addNode: function()
        //key: {method: }
      //}

  //toNode = toNode || this;
  //check if object has any properties
  if ($.isEmptyObject(this)) {
      this[newNode] = new Graph();
    }
  else {
    for (var key in this) {
      if (toNode === key) {
        this[newNode] = new Graph();
      } else {
        key.addNode(newNode, toNode)
        }
    }
  };
  //toNode[newNode] = new Graph(); // this should be "this.newNode = new Graph()';
};

Graph.prototype.contains = function(target){
  //search initial nodes for target
  for (var key in this){
    if (key === target) {
      return true;
    }
  };
    //create for loop to look through all the properties in the current "this"
      //if this.key === target, return true
      //else, for each property, recursively call this.keys.contains
};

Graph.prototype.removeNode = function(target){
  //search for correct node to delete;
  //for loop to search through top-level keys
    //if key === node
      //delete node
    //else, recursively call removeNode on all keys

};

Graph.prototype.getEdge = function(fromNode, toNode){
};

Graph.prototype.addEdge = function(fromNode, toNode){
};

Graph.prototype.removeEdge = function(fromNode, toNode){
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


/*

graph {

}

/*graph {


puppies:{
  penguins: {

  }
  kittens: puppies.kittens
}

kittens:{
  penguins: puppies.penguins{

  }
  puppies: graph.puppies
  birds: {}
}

}
*/
