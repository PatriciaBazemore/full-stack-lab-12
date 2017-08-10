
var greeting = Promise.resolve('Hello World!');

var warning = Promise.reject('Tornado Detected!');

greeting.then(console.log); //will be success handler

//warning.then(null, console.log); //it will never resolve

//same as line above
warning.catch(console.log); //just catch error 