forEach = (array, myCallbackFunc) ->
  for element in array
    myCallbackFunc element
  return

theCallback = (element) ->
  console.log(element);

# the following is from
# https://www.bloc.io/resources/javascript-callbacks
myFunction = (text, callback) ->
  console.log(text)
  callback()

myCallback = () ->
  console.log("world!")

# why does callback need to be passed as a parameter into myFunction?
