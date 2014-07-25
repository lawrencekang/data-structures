var makeQueue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);

  someInstance.storage = {};
  someInstance.sizeVal = 0;
  someInstance.firstKey = 0;

  return someInstance

};

var queueMethods = {
  enqueue: function(val){
    this.storage[this.sizeVal] = val;
    if (this.sizeVal < this.firstKey) {
      this.sizeVal = this.firstKey
    };
    this.sizeVal++;
  },

  dequeue: function(){
    var result = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.firstKey++;
    return result;
  },

  size: function(){
    if(this.sizeVal >= this.firstKey) {
      return this.sizeVal - this.firstKey;
    }
    return 0
  }
};


