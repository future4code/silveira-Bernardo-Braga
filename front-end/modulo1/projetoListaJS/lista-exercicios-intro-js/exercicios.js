
	// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------
	// EXERCÍCIO 0A
	function soma(num1, num2) {
	  	// implemente sua lógica aqui
	  	return num1 + num2
	}

	// EXERCÍCIO 0B
	function imprimeMensagem() {
	  	// implemente sua lógica aqui
	  	const mensagem = prompt('Digite uma mensagem!')

	  	console.log(mensagem)
	}

	// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

	// EXERCÍCIO 01
	function calculaAreaRetangulo() {
		let altura = prompt("digite a altura do retangulo")
		let largura = prompt("digite a largura do retangulo") 
		console.log(altura * largura);
	
	}
	

	// EXERCÍCIO 02
	function imprimeIdade() {
		let todayYear = prompt("digite p seu ano atual: ")
		let bournYear = prompt('digite p seu ano de nascenca')
		console.log(todayYear - bournYear);
	}

	// EXERCÍCIO 03
	function calculaIMC(peso, altura) {
		let imc = peso / (altura *altura)
		return imc;

	}

	// EXERCÍCIO 04
	function imprimeInformacoesUsuario() {
	  	// implemente sua lógica aqui
	  	// "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
		let nome = prompt('digite seu nome')
		let idade = Number(prompt('digite a sua idade'))
		let email = prompt('digite o seu e-mail')
		console.log('Meu nome é '+ nome + ', tenho '+idade+" anos, e o meu email é " + email+'.');
		
		
	}

	// EXERCÍCIO 05
	function imprimeTresCoresFavoritas() {
		var cor = []
		cor[0] = prompt('digite a sua cor favorita')
		cor[1] = prompt('digite a sua cor favorita')
		cor[2] = prompt('digite a sua cor favorita')
		console.log(cor[0], cor[1], cor[2])
		
		
		
		
		
		
		
		
		
		
		
		
		// let cor1 = prompt('digite a sua cor favorita');
		// let cor2 = prompt('digite a sua cor favorita');
		// let cor3 = prompt('digite a sua cor favorita');
		// cor[0] = cor1;
		// cor[1] = cor2;
		// cor[2] = cor3;


		// return cor;

	}

	// EXERCÍCIO 06
	function retornaStringEmMaiuscula(string) {
		return string.toUpperCase()

	}

	// EXERCÍCIO 07
	function calculaIngressosEspetaculo(custo, valorIngresso) {
		return custo / valorIngresso;

	}

	// EXERCÍCIO 08
	function checaStringsMesmoTamanho(string1, string2) {
		let str1 = string1.length;
		let str2 = string2.length;
		return str1===str2;
	}

	// EXERCÍCIO 09
	function retornaPrimeiroElemento(array) {
		return array[0];

	}

	// EXERCÍCIO 10
	function retornaUltimoElemento(array) {
		let ultimo = (array.length) - 1;
		return array[ultimo];

	}

	// EXERCÍCIO 11
	function trocaPrimeiroEUltimo(array) {
		let ultimo = (array.length) - 1;
		let troca = array[ultimo]
		array[ultimo] = array[0]
		array[0] = troca;
		return array;

	}

	// EXERCÍCIO 12
	function checaIgualdadeDesconsiderandoCase(string1, string2) {
		let str1 = string1.toUpperCase();
		let str2 = string2.toUpperCase();
		return str1 === str2;

	}
	//DESAFIO
	// EXERCÍCIO 13
	function checaRenovacaoRG() {
		let anoAtual = Number(prompt('digite ano atual'))
		let dataNascimento = Number(prompt('digite o ano de seu nascimento'))
		let anoRG = Number(prompt('digite o ano em que a seu RG foi emitida'))

		let idade = anoAtual - dataNascimento;
		let idadeRG = anoAtual - anoRG;

		let pessoaJovem = idade <= 20 && idadeRG >= 5;
		let pessoaAdulta = 21 <= idade&&idade <= 50 && idadeRG >= 10;
		let vovo = 51 <= idade && idadeRG >15;

		console.log(pessoaAdulta || pessoaJovem || vovo);




	}

	// EXERCÍCIO 14
	function checaAnoBissexto(ano) {
		let div400 = (ano%400) === 0;
		let mult4 = (ano%4) === 0 && !((ano%100)===0);
		return div400||mult4;

	}

	// EXERCÍCIO 15
	function checaValidadeInscricaoLabenu() {
		let idade = prompt('vc tem mais de 18 anos?')
		let encMedio = prompt('vc possui o encino medio completo?')
		let disponibilpidade = prompt('Você possui disponibilidade exclusiva durante os horários do curso?')
		
		condicao1 = "sim" === idade
		condicao2 = "sim" === encMedio
		condicao3 = "sim" === disponibilpidade
		console.log(condicao1 && condicao2 && condicao3);

	}