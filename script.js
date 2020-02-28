function ex1() {

	var string = document.getElementById('texto').value; //pegar do input
	result = string.split(" ").reverse().join(" ");
	let texto = document.createElement('p');
	texto.innerHTML = "<br> <br> Resultado:" + result;
	document.getElementById('result').appendChild(texto);
}

function ex2() {
	var vetor2 = ["Primeiro", "Segundo", "Terceiro"];
	var teste = vetor2[0]+vetor[1]+vetor[2];
	console.log(teste);
}

function ex3() {
	var vetor = new Array;
	var aux;
	for (i = 0; i < 6; i++) {
		vetor[i] = document.getElementById(i).value;
	}
	for (j = 10; j > 0; j--) {
		for (i = 0; i < j-1; i++) {
			if (vetor[i]>vetor[i+1]) {
				aux = vetor[i];
				vetor[i] = vetor[i+1];
				vetor[i+1] = aux;
			}
		}
	}
	let title = document.createElement('h4');
	title.innerHTML = "Números em ordem crescente:";
	document.getElementById('result').appendChild(title);
	for (i = 0; i < 6; i++) {
		let p = document.createElement('p');
		p.innerHTML = vetor[i];
		document.getElementById('result').appendChild(p);
		console.log(vetor[i])
	}
	document.getElementById('cont').hidden = true;
}