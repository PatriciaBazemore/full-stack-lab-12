

p = new Promise(function(resolve, reject){
    resolve('PROMISE VALUE');
});

p.then(console.log); //console.log the resolution of the p
console.log('MAIN PROGRAM');//all code happens before a .then on a promise