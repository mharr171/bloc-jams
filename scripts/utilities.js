var forEach, myCallback, myFunction, theCallback;

forEach = function(array, myCallbackFunc) {
  var element, i, len;
  for (i = 0, len = array.length; i < len; i++) {
    element = array[i];
    myCallbackFunc(element);
  }
};

theCallback = function(element) {
  return console.log(element);
};

myFunction = function(text, callback) {
  console.log(text);
  return callback();
};

myCallback = function() {
  return console.log("world!");
};
