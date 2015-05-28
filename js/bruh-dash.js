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
    var newArray = array.splice;
    amount = amount || 1;
    newArray = array.splice(0,amount);
    return array;


  },

  dropRight: function(array,n) {
    n = n || 1;
    for(var i=1;i<=n;i++ ){
      array.pop();
    }
    return array;

  },

  fill: function() {

  },

  first: function () {

  },

  indexOf: function () {

  },

  inital: function () {

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