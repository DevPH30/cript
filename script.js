var botaoCrip = document.querySelector(".criptar");

var areaTexto = document.querySelector(".input-texto"); // area do texto digitado
var areaCripto = document.querySelector(".mensagem");//area para o texto CRIPTOGRAFADO

botaoCrip.addEventListener("click",function(){

	var textoDigitado = areaTexto.value; //texto digitado para criptografar

	var textoCriptografado = criptografar(textoDigitado);

	areaCripto.textContent = textoCriptografado; // colocamos o texto digitado na area de CRIPTOGRAFIA
	areaCripto.focus();

})

function criptografar(texto){
	var codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    var textoMinusculo = texto.toLowerCase(); //deixamos todas as letras em minusculo

	for(i=0; i < codigos.length; i++){
		if(textoMinusculo.includes(codigos[i][0])){
			textoMinusculo = textoMinusculo.replaceAll(codigos[i][0],codigos[i][1]);
		}
	}
	return textoMinusculo;
}

var botaoDescrip = document.querySelector(".descriptar");

botaoDescrip.addEventListener("click",function(){

	var textoDigitado = areaTexto.value; //texto digitado para descritografar
	var textoDescriptografado = descriptografar(textoDigitado);

	areaCripto.textContent = textoDescriptografado; // colocamos o texto digitado na area de CRIPTOGRAFIA
	areaCripto.focus();
})

function descriptografar(texto){
		var codigos = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]; //códigos
		var textoMinusculo = texto.toLowerCase(); //deixamos todas as letras em minusculo

	for(i=0; i < codigos.length; i++){
		if(textoMinusculo.includes(codigos[i][1])){
			textoMinusculo = textoMinusculo.replaceAll(codigos[i][1],codigos[i][0]);
		}
	}
	return textoMinusculo;
}

var botaoCopiar = document.querySelector(".copiar");

botaoCopiar.addEventListener("click",function(){

	areaCripto.select();
	document.execCommand("copy");

	areaCripto.textContent = "";
	areaTexto.value = "";
	areaTexto.focus();
})