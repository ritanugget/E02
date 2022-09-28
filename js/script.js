//EX02 WD2 Rita Soares


//utilizar um alerta 3 segundos depois da página carregar
window.onload = setTimeout(function(){
  alert("After some minutes you will be redirected to the \"The Kardashians\" season 2 trailer.");
}, 3000);

//mudar de página para o trailer da nova temporada após
setTimeout(trailer, 60000);
function trailer () {
window.location.assign("https://www.youtube.com/watch?v=i2I1dnY2TqQ");
}


//mudar cor do fundo do header com js em vez de css
  let myBackground = document.querySelector("header");
  myBackground.addEventListener("mouseover", () => { //mudar p/ cor escura com o rato em cima
    myBackground.style.backgroundColor = "#e0e0e0";
  });

  myBackground.addEventListener("mouseleave", () => { //voltar a mudar para a cor inicial do header quando o rato sai
    myBackground.style.backgroundColor = "#F5F5F5";
  });

//mudar fotos Kim
function changeImage(fileName) {    //criar função p/ executar mudar a foto
  let img = document.querySelector("#kimImage");    //selecionar a imagem com o id da kim
  img.setAttribute("src", fileName); //dizer a ação que executa
};


/*botão autografo da khloe
    declarar botão*/

  let khloeAutograph = document.querySelector("#khloeAutograph").addEventListener('click', yourName); //botão p/ acionar prompt

  function yourName(){
    let userName = prompt("What\'s your name, doll?"); //obter nome, variavel usernme

    let userN = document.querySelector("#userN"); // utilizar o texto definido p/ nome do utilizador
    userN.innerHTML = userName; //utilizar userName em vez do texto do html
  }



/*botão com quotes da Kourtney
declarar variaveis c/ id do botão e do resultado*/
let btn = document.querySelector("#btn");
let output = document.querySelector("#output");


//definir os quotes p/ resultado
let quotes = [
  '"Kim, there\'s people that are dying."',
  '"Thank God I have no friends."',
  '"If it wasn’t for my personality and being funny, then our show wouldn’t exist."',
  '“You got smarter since hanging out with me.”',
  '"Literally you are so embarrassing to be around."',
  '"I  start laughing at Kim when she\'s crying because I can\'t help it. She has this ugly crying face that she makes."'
];

//fazer com que o botão gere os quotes como resultado
btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)] // definir quote da lista acima aleatório  tutorial youtube desta parte do código :P https://www.youtube.com/watch?v=NmstSmMykqc&t=608s
    output.innerHTML = randomQuote; //substituir a msg do html com um quote
});
