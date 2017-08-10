

function attachTitle(name) {  //make it return Dr. in front of name
    return 'DR. ' + name;

}

var p = Promise.resolve('MANHATTAN');

// p.then(function(success){
//     return attachTitle(success); //return makes it want to resolve before moving
// }).then(function(nameWithTitle) {
//     console.log(nameWithTitle);
// })

p.then(attachTitle).then(console.log);
