p = new Promise(function(resolve, reject){
    resolve('I FIRED');
    reject(new Error('I DID NOT FIRE'));
});

p.then(console.log, function(err) {
    console.log(err.message); //have to do .message to get message our of new Error function

});
