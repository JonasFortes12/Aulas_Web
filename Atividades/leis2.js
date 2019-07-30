document.getElementById('lampada1').addEventListener('click', function(){
    const elm = document.getElementById("lampada1");

    if(elm.src == "https://i.stack.imgur.com/ybxlO.jpg"){
        document.getElementById("lampada1").src="https://i.stack.imgur.com/b983w.jpg";
    }else{
        document.getElementById("lampada1").src="https://i.stack.imgur.com/ybxlO.jpg";
    }
    
    // document.getElementById("lampada1").src="https://i.stack.imgur.com/ybxlO.jpg";
})


document.getElementById('lampada2').addEventListener('mouseover', function(){
    const elm = document.getElementById("lampada2");

    elm.src = "https://i.stack.imgur.com/ybxlO.jpg";
})
document.getElementById('lampada2').addEventListener('mouseout', function(){
    const elm = document.getElementById("lampada2");

    elm.src = "https://i.stack.imgur.com/b983w.jpg";
})