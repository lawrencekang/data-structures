var HashTable = function(){
  this._limit = 8;
  this._storage = makeLimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  //if this._storage.get(i) is !false, add in new array
  if(!this._storage.get(i)){
    var arr = [];
    arr.push(k, v); //create an array, push k and v into new array
    this._storage.set(i, arr);
  } else {
    var existingArr = this._storage.get(i);
    existingArr.push(k, v);
    this._storage.set(i, existingArr);
  }
    //this._storage.set(i, new array)
  //else, retrieve existing array (this._storage.get(i))
    //add new key and value into existing array
    //this._storage.set(i, updated array)

/*
  //debugger;
  // need to adjust this for collisions
  // may need to run retrieve first
  var current = this.retrieve.call(this, k);
  //debugger;
  if(current){
    var arr = [];
    arr.push(current);
    arr.push(v);
    this._storage.set(i,arr);
  // if it succeeds, create a "bucket" (array) and add the value to the last position
    // grab the current hash key/value
      // create an array
      // put the initial hash key/value in array
      // put the current value in the array as the last value (insert at array[array.length])
  } else {
    // if it fails, then insert (normally)
    this._storage.set(i, v);
  }
*/
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  // loop through the storage array that exists at hash index i
  var existingArr = this._storage.get(i);
  // if we find k, pull up the next highest index (i + 1)
  for(var i = 0; i < existingArr.length; i++){
    if(existingArr[i] === k){
      return existingArr[i+1];
    }
  }
  return null;

};

HashTable.prototype.remove = function(k){
  var hashIndex = getIndexBelowMaxForKey(k, this._limit);
  // get existing array at hash index
  var existingArr = this._storage.get(hashIndex);
  // loop through and search for key
  for(var i = 0; i < existingArr.length; i++){
  if(existingArr[i] === k){
      existingArr[i] = null;
      existingArr[i + 1] = null;
    }
  }
  /*
    //if we find it, set i and i+1 = to nul
  var temp = this._storage.set;
  var cb = function(z,i){
    if (hashIndex == i) {
      temp(hashIndex, null);
    };
  };
  this._storage.each(cb);
*/
/*
  var cb = this._storage.each;
  var temp = this._storage.set;

  cb(function(z, i){
    debugger;
    console.log(hashIndex + " " + i);
    if(hashIndex === i){
      console.log("storage[i] is: " + z + " , index is: " + i + " , hashIndex is: " + hashIndex);
      temp(hashIndex, null);
    };
  });*/

  //instead
  //this._storage.each(function(x) { console.log(x)} );
};



/*
 * Complexity: What is the time complexity of the above functions?
 */











