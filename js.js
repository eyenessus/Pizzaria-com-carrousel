
var slideprincial = 1;
//controlação manual de interação

var slideautomatico = 0;
//controlação automatica

function controla(n){
    //função controla o voltar e o proximo
    mostrarSlides(slideprincial += n)

}

//var voltar = document.getElementById("voltar");
//var proximo= document.getElementById("proximo");

//voltar.addEventListener("click",controla(-1));
// auto clique vai chama a função acima


//proximo.addEventListener("click",controla(1));
// auto clique vai chama a função acima


function slideatual(n){
    mostrarSlides(slideprincial = n)
}



function mostrarSlides(n){
    var i; //inicador /contador
    var slides = document.getElementsByClassName("myslides");
    var botaonave = document.getElementsByClassName("botaonavegadores");
    //ate aqui esta indo tudo normal

    if (n > slides.length){
        slideprincial = 1;
    
    }
    

    if(n < 1){
        slideprincial = slides.length;
         //validando

    }

    for (i = 0; i < botaonave.length; i++){
            botaonave[i].className = botaonave[i].className.replace(" active","")
        
    }

    for(i = 0; i < slides.length; i++){
        
        slides[i].style.display="none";
        
    }

    slides[slideprincial - 1].style.display="block";
    botaonave[botaonave -1].className += "active";
}

mostrarSlides(slideprincial);


