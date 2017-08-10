
var p = new Promise(function(resolve/*whatever function you call that resolves*/, reject) {
    setTimeout(function() {
        //resolve(); resolves the promise
        resolve('FULFILLED!');
    }, 300);
});

// P.then(function(success) { //success = 
//         console.log(success);
// })

p.then(console.log);
    