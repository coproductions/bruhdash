var global = window || GLOBAL;

var bruhdash = (function(){

  function _chunk(){
    return function(array,size){
      var newArray = [];
      size = size || 1;
      for(var i=0; i<array.length; i+=size){
        newArray.push(array.slice(i,i+size));
      }
      return newArray;
    };
  }
  function _compact(array){
   var newArray = [];
      for(var i=0; i<array.length; i++){
        if(array[i]){
          newArray.push(array[i]);
        }
      }
      return newArray;
  }
  function _difference(arr1,arr2){
    var newArray = [];
    for(var i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i])<0){
        newArray.push(arr1[i]);
      }
    }
      return newArray;
  }
  function _drop(array,amount){
    var newArray = array;
    amount = amount || 1;
    newArray.splice(0,amount);
    return newArray;
  }
  function _dropRight(array,n){
    n = n || 1;
    newArray = array;
    for(var i=1;i<=n;i++ ){
      newArray.pop();
    }
    return newArray;
  }
  function _fill(array, value, start, end){
    start = start || 0;
    end = end || array.length;
    for(var i=start; i<end; i++){
      array[i]=value;
    }
    return array;
  }
  function _first(array){
      return array[0];
  }
  function _indexOf(array,value,fromIndex) {
    fromIndex = fromIndex || 0;
    for(var i=fromIndex; i<array.length; i++){
      if(array[i]===value){
        return i;
      }
    }
    return -1;
  }
  function _initial(array) {
    return array.slice(0,array.length-1);
  }
  function _last(array) {
    return array[array.length-1];
  }
  function _lastIndexOf(array,value,fromIndex) {
      fromIndex = fromIndex || array.length-1;
      for(var i=fromIndex; i>=0; i--){
      if(array[i]===value){
        return i;
      }
    }
    return -1;
  }
  function _pull(array,values) {
    var newArray = [];
    var counter = 0;
    for(var i=0; i<array.length; i++){
      counter = 0;
      for(var j=1; j<arguments.length; j++){
        if(array[i]===arguments[j]){
          counter++;
        }
      }
      if(counter === 0){
        newArray.push(array[i]);
      }
    }
    return newArray;
  }
  function _pullAt(array,indexes) {
    var newArray = [];
    for(var i=1; i<arguments.length; i++){
      newArray.push(array[arguments[i]]);
    }
    for(var j = arguments.length - 1 ; i > 0 ; j--){
      array.splice(arguments[j],1);
    }
    return newArray;
  }
  function _rest(array) {
    array.shift();
    return array;
  }
  function _slice(array,start,end) {
    end = end || array.length;
    start = start || 0;
    var newArray = [];
    for(var i=start; i<end; i++){
      newArray.push(array[i]);
    }
    return newArray;
  }
  function _take(array,n) {
    n = n || 1;
    var newArray = [];
    for(var i=0; i<=n; i++){
      newArray.push(array[i]);
    }
    return newArray;
  }
  function _takeRight(array,n) {
    n = n || 1;
    var newArray = [];
    for(var i=array.length-1; i>=array.length-n; i--){
      newArray.unshift(array[i]);
    }
    return newArray;
  }
  function _zip(arrays) {
    var n=0;
    var newArray = [];
    var tempArray = [];
    var longest = 0;
    for (var k = 0; k < arguments.length; k++) {
      if(longest<arguments[k].length){
        longest = arguments[k].length;
      }
    }
    while(n++ <longest){
      for(var i=0; i<arguments.length; i++){
        if(arguments[i]!== undefined && arguments[i][n]!==undefined){
          tempArray.push(arguments[i][n]);
        }
        else{
          tempArray.push(null);
        }
      }
      newArray.push(tempArray);
       tempArray = [];
    }
    return newArray;
  }
  function _unzip(array) {
    var n=0;
    var longest = 0;
    for (var k = 0; k < array.length; k++) {
      if(array[k].length>longest){
        longest = array[k].length;
      }
    }
    var newArray = [];
    var tempArray = [];
    while(n++ < longest){
      for(var i=0; i<array.length; i++){
        if(array[i][n] !== undefined && array[i] !== undefined){
          tempArray.push(array[i][n]);
        }
        else{
          tempArray.push(null);
        }
      }
      newArray.push(tempArray);
      tempArray = [];
    }
    return newArray;
  }
  function _without(array,exclude) {
    var newArray = [];
    var count = 0;
    for (var i = 0; i< array.length; i++) {
      for (var j = 1; j < arguments.length; j++) {
        if(array[i]===arguments[j]){
          count++;
        }
      }
      if(count===0){
        newArray.push(array[i]);
      }
      count = 0;
    }
    return newArray;
  }
  function _flatten(array,isDeep){
    var newArray = [];
    var iterate = function(nestedArray){
      for (var i = 0; i < nestedArray.length; i++) {
        if(!Array.isArray(nestedArray[i])){
          newArray.push(nestedArray[i]);
        }
        else{
          iterate(nestedArray[i]);
        }
      }
    };
    if(!isDeep){
      for(var i = 0; i < array.length; i++) {
        if(Array.isArray(array[i])){
          for (var j = 0; j < array[i].length; j++) {
            newArray.push(array[i][j]);
          }
        }
        else{
          newArray.push(array[i]);
        }
      }
    }

    else{
        iterate(array);
    }
    return newArray;
  }

  return {
    chunk: _chunk,
    compact: _compact,

    difference: _difference,

    drop: _drop,

    dropRight: _dropRight,

    fill: _fill,

    first: _first,

    indexOf: _indexOf,

    initial: _initial,

    last: _last,

    lastIndexOf: _lastIndexOf,

    pull: _pull,

    pullAt: _pullAt,

    rest: _rest,

    slice: _slice,

    take: _take,

    takeRight: _takeRight,

    zip: _zip,

    unzip: _unzip,

    without: _without,

    flatten: _flatten
  };
})();