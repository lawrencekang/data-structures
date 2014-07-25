var Stack = function(objName) {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
    this.sizeVal = 0;
    this.storage = {};
};

Stack.prototype = {
  constructor: Stack,
  push: function(val){
    this.storage[this.sizeVal] = val;
    this.sizeVal++;
  },
  pop: function(){
    if(this.sizeVal > 0){
      this.sizeVal--;
    }
    var result = this.storage[this.sizeVal];
    delete this.storage[this.sizeVal];
    return result;
  },
  size: function(){
    return this.sizeVal;
  }
}
