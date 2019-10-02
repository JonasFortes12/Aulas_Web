function getNome(callback){
    setTimeout(function(){
        return "Jonas"
        callback("Jonas");
    }
}


// -------------------------------

function getNomePromise (){
    return new promise (function(resolve, reject){
        setTimeout(function(){
            resolve('Daniel');
        },100)

    });
}
getNome(function(retorno){
    console.log(retorno);
})
getNomePromise().then(function (retoro){
    console.log('Promise Sucess', retorno);
});
