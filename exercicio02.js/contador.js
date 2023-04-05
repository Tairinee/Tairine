function For(){

    let valor = 0;

    for (i = 1; i < 11; i++){
        valor +=i;
        console.log(i)
    }
}

function While(){

    let valor2 = 0;

    while (valor2 < 10){
        valor2++;
        console.log(valor2)
    }
}

function impar_par(valorDigitado = Math.floor(Math.random()*10)){
    
    let resto = (valorDigitado % 2);
    console.log(valorDigitado)

    if (resto == 1 || resto != 0){
        console.log("valor " + valorDigitado + " é ímpar")
    } else if (resto == 0) {
        console.log("valor " + valorDigitado + " é par")
    }
}

function calcMedia() {

    let valores = [
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1)
    ];
        
    let repeticoes = 0;
    let max = 0;
    
    for(let valor of valores) {
        max = max + valor;
        repeticoes++;
    }
    let media = max/repeticoes;
    console.log("A média dos valores é: " + media)
}
    
function locMax() {
    
    let valoresmedios = [
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1)
    ];
    let valormaximo = 0;
    
    for(let valor of valoresmedios) {

    if (valor > valormaximo) {
        valormaximo = valor}
    }
    
    console.log("O maior valor encontrado foi: " + valormaximo)
}
    
function Repetidos() {
    
    let valoresembaralhados = [
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1)
    ];
    let valorprocurado = 7
    let ocorrencias = 0
    
    for(let valor of valoresembaralhados) {
    if (valor == valorprocurado) {
        ocorrencias++
        }
    }
    
    console.log("O número de vezes que " + valorprocurado + " aparece é: " + ocorrencias)
}

function LocRemover() {

    let listavalores = [
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1),
        Math.floor(Math.random()*10 + 1), Math.floor(Math.random()*10 + 1)]
    let valorremover = 7;
    let alvos = listavalores.indexOf(valorremover)
    let ocorrenciasremovidas = 0;

    for(let valor of listavalores){
        if (valor == valorremover){
            ocorrenciasremovidas++
        }
    }

    while (alvos >= 0){
        listavalores.splice(alvos, 1)
        alvos = listavalores.indexOf(valorremover)
    }

    for(let valor of listavalores){
        console.log(valor);
    }
    if(ocorrenciasremovidas == 0) {
        console.log("O valor procurado não existe")
    } 
    else if (ocorrenciasremovidas == 1) {
        console.log("O número " + valorremover + " foi encontrado " + ocorrenciasremovidas + " vez")
        console.log("Todas ocorrências de  " + valorremover + " foram removidas")
    }
    else {
        console.log("O número " + valorremover + " foi encontrado " + ocorrenciasremovidas + " vezes")
        console.log("Todas ocorrências de  " + valorremover + " foram removidas")
    }
}

function reverseString(){
    var str = document.querySelector('#str').value;
    var splitString = str.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    if(str == ""){
        console.log("Erro!")
    } else {
        console.log("O texto recebido foi invertido para: " + joinArray)
    }
}

function detecPalindromo(){
    var palavraOriginal = document.querySelector('#palavra').value
    var palavra = document.querySelector('#palavra').value;
    var splitString = palavra.split("");
    var reverseArray = splitString.reverse();
    var joinArray = reverseArray.join("");

    if(palavraOriginal == "") {
        console.log("Erro!")
    } 
    else if(palavraOriginal == joinArray){
        console.log("A palavra " + palavraOriginal + " é um palíndromo")
    }
    else {
        console.log("A palavra " + palavraOriginal + " não é um palíndromo")
    }

}

function fatorial() {
    var valor = Math.floor(Math.random()*10 + 1);

    console.log(valor);

    for (i = valor -1; i > 0; i--){
        valor *= i;
        console.log(valor)
    }

    console.log(valor);
}

function fibonacci() {
    var valor = Math.floor(Math.random() * 10 + 1);
    var valor1 = 0;
    var valor2 = 1;
    var valor3 = 1;

    console.log(valor)

    for(i = valor - 3; i > 0; i--) {
        valor1 = valor2;
        valor2 = valor3;
        valor3 = valor1 + valor2;

        console.log(valor3)
    }
    if (valor == 1) {
        console.log("O valor encontrado foi 0")
    } else if (valor == 2) {
        console.log("O valor encontrado foi 1")
    } else if (valor == 3) {
        console.log("O valor encontrado foi 1")
    } else {
        console.log("O valor encontrado foi " + valor3)
    }
}




   
    
   