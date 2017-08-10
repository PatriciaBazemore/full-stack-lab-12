var p = new Promise(function(resolve, reject){
    setTimeout(function() {
            var e = new Error('REJECTED!');  //error object with rejected property
            reject(e);
    }, 300);
});


p.then(null/*because there will be no successes*/, onReject);

function onReject(error) {
    console.log(error.message);
}