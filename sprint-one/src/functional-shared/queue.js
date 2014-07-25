var makeQueue = function(){
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {
    sizeVal: 0,
    firstKey: 0,
    storage: {}
  }

_.extend(someInstance, queueMethods)

  return someInstance;
};

var queueMethods = {
  enqueue: function(val){
    this.storage[this.sizeVal] = val;
    this.sizeVal++;
  },
  dequeue: function(){
    var result = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.firstKey++;
    return result;
  },
  size: function(){
    if(this.sizeVal >= this.firstKey){

    return this.sizeVal - this.firstKey;
    }
    return 0;
  }
};


