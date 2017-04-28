
//CONCEITOS BASICOS
//Desenhando um triangulo
	function imprimetriangulo(){
         var variavel = prompt('Digite o num de linhas: ');
        var i;
        var stringhashtag = "##";
        document.write(stringhashtag);
        document.write("<br>");
        for(i=0;i<variavel;i++){
            stringhashtag = stringhashtag + "#";
            document.write(stringhashtag);
            document.write("<br>");
        }
    }

//Tabuleiro de xadrez
    function imprimexadrex(){
        var variavel = prompt('Digite o num de linhas: ');
        var i;
        var stringhashtag = "# # # #";
        var stringhashtag2 = "&nbsp;# # # #";
        document.write(stringhashtag);
        document.write("<br>");
        for(i=1;i<variavel;i++){
            if(i%2==0 || i==0){
                document.write(stringhashtag);
                document.write("<br>");
            }
            else{
                document.write(stringhashtag2);
                document.write("<br>");
                continue;
            }
       
        }
    }
//Verificando Palíndromos
    function palindrumu() {
            
        var variavel = prompt('Digita a palavra ai: ');
        var palavra="";
        for(var i=variavel.length-1;i>=0;i--){
            palavra = palavra + variavel[i];
        }
        alert(palavra);
        if(variavel==palavra){
            document.write("E Palindromo");
        }

    }

//Um programa diferente...
    function imprimirfizz(){ 
	var i;
   	for(i=1; i<=100; i++){
    	if(i%3==0 && i%5!=0){
        	console.log("Fizz \n"); 
        }
        if(i%3!=0 && i%5==0){
        	console.log("Buzz \n");
        }
        else if (i%3==0 && i%5==0){
        	console.log("Fizz Buzz \n");
        }
        else{
        	console.log(i);
        }
        
        
    }
}


//FUNCOES
//Maximo e minimo
function min(a,b){ 
	if(a<b)
		return a; 
	else
		return b;
}

function max(a,b){ 
	if(a>b)
		return a; 
	else
		return b;
}

function mod2(number){
	if(number%2==0){
		return true;
    }
	else{
		return false;
    }
 }

//Contando caracteres
 function countChars(frase,c){
	var cont=0;
	for(var i=0;i<frase.length;i++){
		if(frase[i]==c)
			cont++;
    }
	return cont;
}

//Objetos & Arrays
//Trabalhando com intervalos
function range(max,min){
	var array = [];
	var j=0;
	for(var i=min;i<max;i++){
        array.push(i);
		j++;
    }
	return array;
}

//Revertendo um array
function reverseArray(array) {
    var reverso = [];
    for (var i = array.length - 1; i >= 0; i--)
        reverso.push(array[i]);
    return reverso;
}

//Trabalhando com listas
function toList(array) {
    var list = {};
    var listPosition = list;
    for (var i = 0; i < array.length; i++) {
        listPosition.value = array[i];
        listPosition.rest = {};
        listPosition = listPosition.rest;
    }
    return list;

}

//DeepEquals
//para testar a questão: cria objetos iguais ae
function objeto(algo,maisalgo) {
    this.um = algo;
    this.dois = maisalgo;
}
var thing1 = new objeto("blah", "blah");
var thing2 = new objeto("bleh", "bleh");
deepEquals(thing1, thing2);

function deepEquals(obj1, obj2) {
    var prop1 = Object.keys(obj1);
    console.log(Object.keys(obj1));
    var prop2 = Object.keys(obj2);
    if (prop1.length == prop2.length) {
        for (var i = 0, l = prop1.length; i < l; i++) {
            if (prop1[i] != prop2[i]) {
                break;
            }
            else
                continue;
        }
        if (i == l)
            console.log("Suas propriedades sao iguais");
    }
}

//FUNÇÕES DE ALTA ORDEM
//Ordenação
function ordenacao(array, funcaocompara) {
    return array.sort(funcaocompara);
}

function crescente(a,b) {
    return (a>b);
}

function descrescente(a, b) {
    return (a<b);
}

function crescenteimpares(a, b) {
    if(a%2!=0 && b%2!=0)
        return (a>b);
}

function descrescentepares(a, b) {
    if (a%2==0 && b%2==0)
        return (a<b);
}

//Criptografia

function criptografia(string, criterio) {
    return criterio(string);
}

function cifraCesar(string) {
    var alfabeto = "abcdefghijklmnopqrstuvwxyz"; //26 letras
    var res = alfabeto.split("");
    var novastring = [];
    for (var i = 0; i < string.length; i++) {
        for (var j = 0; j <= 26; j++) {
            if (j == 26) {
                novastring.push('c');
                break;
            }
            else if (j == 25) {
                novastring.push('b');
                break;
            }
            else if (j == 24) {
                novastring.push('a');
                break;
            }
            else if (res[j] == string[i]) {
                novastring.push(res[j + 3]);
                break;

            }
        }

    }
    return novastring.toString();

}
//pro teste
    //console.log(criptografia("abcd", cifraCesar));



//Verificando um número
function verificanumero(numero, verificando) {
    if (verificando(numero))
        return true;
    else
        return false;
}
function impar(numero) {
    if (numero % 2 != 0)
        return true;
    else
        return false;
}
function primo(numero) {
    var start = 2;
    while (start <= Math.sqrt(numero)) {
        if (numero % start++ < 1) return false;
    }
    return numero > 1;
}


//Transformações em uma string
function transformacaractere(string, transformacao) {
    return transformacao(string);
}

function capslockVogal(string) {
    var newstring = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u") {
            newstring[i] = string[i].toUpperCase();
        }
        else {
            newstring[i] = string[i];
        }
       
    }
    return newstring.toString();
}

function capslockConsoante(string) {
    var newstring = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] != "a" && string[i] != "e" && string[i] != "i" && string[i] != "o" && string[i] != "u")
            newstring[i] = string[i].toUpperCase();
        else {
            newstring[i] = string[i];
        }
    }
    return newstring.toString();
}

function notlockVogal(string) {
    var newstring = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] == "a" || string[i] == "e" || string[i] == "i" || string[i] == "o" || string[i] == "u")
            newstring[i] = string[i].toLowerCase();
    }
    return newstring.toString();
}

function notlockConsoante(string) {
    var newstring = [];
    for (var i = 0; i < string.length; i++) {
        if (string[i] != "a" && string[i] != "e" && string[i] != "i" && string[i] != "o" && string[i] != "u")
            newstring[i] = string[i].toLowerCase();
    }
    return newstring.toString();
}

//Funções matriciais
function somando(i, j) {
    return i + j;
}

function mult(i, j) {
    return i * j;
}

function eq1(i, j) {
    return i == j ? 1 : 0;
}

function eq2(i, j) {
    return i ^ 2 / (j + 1);
}

function eq3(i, j) {
    return i > j ? 1 : (i < j ? 5 : 0);
}

function criamatriz(a,b,funcao) {
    var matriz = [[], []];
    for (var i = 0; i < a; i++) {
        for (var j = 0; j >= b; j--) {
            matriz[i][j] = funcao(i,j);
        }
    }
    return matriz;
}





