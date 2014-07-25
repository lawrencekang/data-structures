var makeStack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.

  var someInstance = Object.create(stackMethods);

  someInstance.sizeVal = 0;
  someInstance.storage = {};


  return someInstance
};

var stackMethods = {
  push: function(value){
    this.storage[this.sizeVal] = value;
    this.sizeVal++
  },
  pop: function(){
    if(this.sizeVal > 0){
      this.sizeVal--
    }

  var result = this.storage[this.sizeVal];
  delete this.storage[this.sizeVal];
  return result;
  },
  size: function(){
    return this.sizeVal
  }

};




