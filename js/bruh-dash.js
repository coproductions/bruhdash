var global = window || GLOBAL;

global.bruhdash = {
  chunk: function(array,size){
    var newArray = [];
    size = size || 1;
    for(var i=0; i<array.length; i+=size){
      newArray.push(array.slice(i,i+size))

    }
    return newArray;

  },

  compact: function(array) {
    var newArray = [];
    for(var i=0; i<array.length; i++){
      if(array[i]){
        newArray.push(array[i])
      }

    }
    return newArray;

  },

  difference: function(arr1,arr2) {
    var newArray = [];
    for(var i=0; i<arr1.length; i++){
      if(arr2.indexOf(arr1[i])<0){
        newArray.push(arr1[i])
      }

    }
    return newArray;


  },

  drop: function(array,amount){
    var newArray = array;
    amount = amount || 1;
    newArray.splice(0,amount);
    return newArray;


  },

  dropRight: function(array,n) {
    n = n || 1;
    newArray = array;
    for(var i=1;i<=n;i++ ){
      newArray.pop();
    }
    return newArray;

  },

  fill: function(array, value, start, end) {
    start = start || 0;
    end = end || array.length;
    for(var i=start; i<end; i++){
      array[i]=value;
    }
    return array;


  },

  first: function (array) {
    return array[0];

  },

  indexOf: function (array,value,fromIndex) {
    fromIndex = fromIndex || 0;
    for(var i=fromIndex; i<array.length; i++){
      if(array[i]===value){
        return i;
      }
    }
    return -1;

  },

  initial: function (array) {
    return array.slice(0,array.length-1);

  },

  last: function (array) {
    return array[array.length-1];

  },

  lastIndexof: function (array,value,fromIndex) {
      fromIndex = fromIndex || array.length-1;
      for(var i=fromIndex; i>=0; i--){
      if(array[i]===value){
        return i;
      }
    }
    return -1;

  },

  pull: function (array,values) {
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
        newArray.push(array[i])
      }
    }
    //array = newArray;
    return newArray;

  },

  pullAt: function (array,indexes) {
    var newArray = [];
    for(var i=1; i<arguments.length; i++){
      newArray.push(array[arguments[i]])
    }
    for(var i=arguments.length-1; i>0; i--){
      array.splice(arguments[i],1)
    }
    return newArray;

  },

  rest: function (array) {
    array.shift()
    return array;

  },

  slice: function (array,start,end) {
    end = end || array.length;
    start = start || 0;
    var newArray = [];
    for(var i=start; i<end; i++){
      newArray.push(array[i])
    }
    return newArray;
  },

  take: function (array,n) {
    n = n || 1;
    var newArray = [];
    for(var i=0; i<=n; i++){
      newArray.push(array[i])
    }
    return newArray;
  },

  takeRight: function (array,n) {
    n = n || 1;
    var newArray = [];
    for(var i=array.length-1; i>=array.length-n; i--){
      newArray.unshift(array[i])
    }
    return newArray;

  },

  zip: function (arrays) {
    var n=0;
    var newArray = [];
    var tempArray = [];
    while(n<arguments[0].length){
      for(var i=0; i<arguments.length; i++){
        tempArray.push(arguments[i][n])
      }
      n++;
      newArray.push(tempArray);
       tempArray = [];
    }
    return newArray;
  },

  unzip: function () {

  },

  without: function() {

  }
};