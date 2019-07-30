function vermelho(){
    const elemetoBody = document.querySelector("body");
    elemetoBody.style.backgroundColor = 'red';
}

function verde(){
    const elemetoBody = document.querySelector("body");
    elemetoBody.style.backgroundColor = 'green';
}

function azul(  ){
    const elemetoBody = document.querySelector("body");
    elemetoBody.style.backgroundColor = 'blue';
}

function some(){
    const elementImg = document.getElementById('img');
    
}
function aparece(){
    const elementImg = document.getElementById('img');

}

// -----------------------------------------------------------------------
document.getElementById('btmagico').addEventListener('click', function(){
    const image = document.getElementById("img");

    if(image.style.display == "none"){
        image.style.display = "block"
    }else{
        image.style.display = "none";
    }
});



