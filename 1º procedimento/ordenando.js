function add() {

	const valor = document.getElementById('valor').value;
	const node = document.createElement('li');
	const no = document.createTextNode('valor');
	node.appendChild(no);
	document.getElementById('lista').appendChild(node).innerHTML = valor
	document.getElementById('valor').value = null
	console.log(valor)
}

function ordenar() {

	// Capturando a lista de valores e transformando em inteiros;
	const list = document.getElementById('lista');
	const itemLista = []
	
	for (i=0; i < list.children.length; i++) {
		const value = eval(list.children[i].textContent);
		itemLista.push(value);
	}
	// Aplicando a formula Bubble sort
	const listaOrdenada = document.getElementById('resultado');
	
	for (let last = itemLista.length - 1; last > 0; last --) {
		for (let i = 0; i < last; i++ ){
			if (itemLista[i] > itemLista[i + 1]){
				[itemLista[i], itemLista[i + 1]] = [itemLista[i + 1], itemLista[i]];
			}
			
		}
	}
	//inserindo os dados no campo resultado:
	for (var i = 0; i < itemLista.length; i++) {
		var newItem = document.createElement("li");
		newItem.innerHTML = itemLista[i];
		//newItem.innerText= itemLista[i];
		listaOrdenada.appendChild(newItem);
   
	}
}
function misturar() {
	// Capturando a lista de valores e transformando em inteiros;
	const list = document.getElementById('lista');
	const itemLista = []
	
	for (i=0; i < list.children.length; i++) {
		const value = eval(list.children[i].textContent);
		itemLista.push(value);
	}
	// Aplicando a formula Bubble sort
	const listaOrdenada = document.getElementById('result');
	
	for (let last = itemLista.length - 1; last > 0; last --) {
		let j = Math.floor(Math.random() * (last +1));
		[itemLista[last], itemLista[j]] = [itemLista[j], itemLista[last]]
	}
	//inserindo os dados no campo resultado:
	for (var i = 0; i < itemLista.length; i++) {
		var newItem = document.createElement("li");
		newItem.innerHTML = itemLista[i];
		//newItem.innerText= itemLista[i];
		listaOrdenada.appendChild(newItem);

}
}