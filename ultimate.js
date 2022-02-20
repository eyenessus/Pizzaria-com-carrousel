var nome = document.getElementById("nomeCompleto");
var telefone = document.getElementById("telefone")
var sabor = document.getElementById("sabor");

function validarNome() {
    
    if(nome.value == ""){ 
        nome.style.background="red";
        nome.style.color= "white";
        nome.focus(); 
        return false
    }else{
      nome.style.background="green";
      nome.style.color= "white";
      nome.style.fontWeight="bold"
      validarTelefone();
      return true;
    }
}

function formatarCep(campo){
  var v=campo.value.replace(/D/g,"")                
  v=v.replace(/^(d{5})(d)/,"$1-$2") 
  campo.value = v;
}



function validarTelefone(){
  if(telefone.value == ""){ 
    telefone.style.background="red";
    telefone.style.color= "white";
    telefone.focus(); 
    return false
}else{
  telefone.style.background="green";
  telefone.style.color= "white";
  telefone.style.fontWeight="bold"
  validarNome();
  return true;
}

}

function validarSabor(){

  if(sabor.value == ""){ 
    sabor.style.background="red";
    sabor.style.color= "white";
    sabor.focus();
    return false
}else{
  sabor.style.background="green";
  sabor.style.color= "white";
  sabor.style.fontWeight="bold"
  return true;
}
}


nome.addEventListener("blur",validarNome);
sabor.addEventListener("blur",validarSabor);
telefone.addEventListener("blur",validarTelefone);
//metodo ouvindo para chamar função acima
//nome.addEventListener("click",validar);


//obtendo data de hoje
let data = new Date();
let dataFormatada = ((data.getDate() )) + "/" + ((data.getMonth() + 1)) + "/" + data.getFullYear();
let paragrafo = document.createElement('p');
//Creando um elemnto tag p
paragrafo.id = 'info';  //atribuindo um ID
paragrafo.innerHTML = 'Data de hoje '+ dataFormatada; //Inserindo um texto dentro da tag p
document.getElementById("historia").appendChild(paragrafo);
//entrando no dom
//e acessando body, e faladno que e o ultmo filho do elemento body
//colocando o paragraph como ultimo filho do elemento body


/* Máscaras ER */
function mascara(o,f){
  v_obj=o
  v_fun=f
  setTimeout("execmascara()",1)
}
function execmascara(){
  v_obj.value=v_fun(v_obj.value)
}
function mtel(v){
  v=v.replace(/\D/g,""); //Remove tudo o que não é dígito
  v=v.replace(/^(\d{2})(\d)/g,"($1) $2"); //Coloca parênteses em volta dos dois primeiros dígitos
  v=v.replace(/(\d)(\d{4})$/,"$1-$2"); //Coloca hífen entre o quarto e o quinto dígitos
  return v;
}
function id( el ){
return document.getElementById( el );
}
window.onload = function(){
id('telefone').onkeyup = function(){
  mascara( this, mtel );
}
}

var cep = document.getElementById("cep");

function pesquisacep(valor) {

  //Nova variável "cep" somente com dígitos.
  var cep = valor.replace(/\D/g, '');

  //Verifica se campo cep possui valor informado.
  if (cep != "") {

      //Expressão regular para validar o CEP.
      var validacep = /^[0-9]{8}$/;

      //Valida o formato do CEP.
      if(validacep.test(cep)) {

          document.getElementById('cep').value = cep.substring(0,5)
          +"-"
          +cep.substring(5);

          //Preenche os campos com "..." enquanto consulta webservice.
          document.getElementById('rua').value="...";

          //Cria um elemento javascript.
          var script = document.createElement('script');

          //Sincroniza com o callback.
          script.src = 'https://viacep.com.br/ws/'+ cep + '/json/?callback=meu_callback';

          //Insere script no documento e carrega o conteúdo.
          document.body.appendChild(script);

      } //end if.
      else {
          //cep é inválido.
          limpa_formulário_cep();
          alert("Formato de CEP inválido.");
      }
  } //end if.
  else {
      //cep sem valor, limpa formulário.
      limpa_formulário_cep();
  }
};
cep.addEventListener("blur",pesquisacep);

/*
var slideIndex = 1;//variavel para controle manual
//aqui e o valor inicial que sera do slide
//conforme eu avance ou volte sera atribuido via parametro para a função plusSlides
//-1 volta e 1 avança


var slideIndex2 = 0;

//var proximo = document.getElementById("next");
//var voltar = document.getElementById("prev");

function plusSlides(n){ //função manipula a ação manual para controla o proximo e o anterior
  mostrarSlides(slideIndex += n) //recebe o valor do parametro da função
  //recebe o valor de n e atribui ao metodo slideIndex
  //1 avança
  //-1 volta
  // += atribui sem afetar a substituição
}



//voltar.addEventListener("click",plusSlides(-1)); //antes 
//aqui e menos 1 para voltar



//proximo.addEventListener("click",plusSlides(1)); //depois
//ao clica em proximo no caso a setinha, vai ser equivocada a função plusSlides e passar 1 de argumento que ai vai ser proximo


function slideExato(n){
  mostrarSlides(slideIndex = n);
}

function mostrarSlides(n){
  var i; //contador
  var slides = document.getElementsByClassName("slider"); //aqui o javascript vai saber quais slides devem ser manipulado.
  //pegando pelo nome do id
  //para conseguir manipular eles

  var dots = document.getElementsByClassName("dot");

  if (n > slides.length){
    //se o tamanho d n for maior que o slide 
    //não deve ultrapassar o tamanho de slide que existir
    slideIndex = 1;
    //aqui verifica se o numero do slide e maior se caso for verdadeira
    //não ultrapassar e faz uma alteração do slide para o primeiro numero 1
  }
  if (n < 1 ){
    //aqui verifica se o numero do slide e menor que 1 se caso for verdadeira
    slideIndex = slides.length;
    //voltara para o inicio
  }

  for (i = 0; i < slides.length; i++){
    dots[i].className = dots[i].className.replace(" active","")
    //se o dot estiver na possicao do for ira pega o classname da classe
    //pegando o valor atual do dots e substituindo pelo valor que esta sendo passado via parametros
  }

  for (i = 0; i < slides.length; i++){
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display="block";
  dots[slideIndex - 1].className +="active";
}

mostrarSlides(slideIndex);
*/



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


