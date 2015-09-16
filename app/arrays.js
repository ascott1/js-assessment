exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf : function(arr, item) {
    return arr.indexOf(item);
  },

  sum : function(arr) {
    var sum = 0;
    for(var i=0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      }
    }
    return arr;
  },

  removeWithoutCopy : function(arr, item) {

  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift();
    return arr;
  },

  concat : function(arr1, arr2) {
    var newArray = arr1.concat(arr2);
    return newArray;
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;

  },

  count : function(arr, item) {
    var total = 0;

    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        total++;
      }
    }

    return total;
  },

  duplicates : function(arr) {

  },

  square : function(arr) {

    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'number') {
        arr[i] = Math.pow(arr[i], 2);
      }
    }

    return arr;

  },

  findAllOccurrences : function(arr, target) {
    var occurrences = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        occurrences.push(i);
      }
    }

    return occurrences;

  }
};
