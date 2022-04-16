let body=document.getElementById('body')
let set=setInterval(reng,1000)
function Hello(){
    clearInterval(set)
    console.log('Basla');
 }

 function By(){
    setInterval(reng,1000)
    console.log('Dayan');
}


function reng(){
    if(body.style.backgroundColor=='black'){
        body.style.backgroundColor='green'
    }
    else{
        body.style.backgroundColor='black'
    }
}





