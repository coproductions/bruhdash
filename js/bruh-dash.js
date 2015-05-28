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

  last: function () {

  },

  lastIndexof: function () {

  },

  pull: function () {

  },

  pullAt: function () {

  },

  rest: function () {

  },

  slice: function () {

  },

  take: function () {

  },

  takeRight: function () {

  },

  zip: function () {

  },

  unzip: function () {

  },

  without: function() {

  }
};