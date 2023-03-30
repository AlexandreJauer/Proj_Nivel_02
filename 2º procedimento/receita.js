const receita = [
    {   titulo: "Batata Recheada",
        imagem: "imagens/batata_recheada.png",
        preparo: "1 - Retire a polpa das duas batatas cozidas, deixando uma cavidade em cada uma, reserve. <br>2 -Em um recipiente, misture as polpas da batata com sal, ovo, queijo mussarela, bacon frito e creme de leite, misture bem. <br>3 - Em um tabuleiro, coloque as duas batatas e distribua em cada cavidade um pouco de queijo mussarela, a mistura das polpas, bacon frito, mais um pouco de queijo mussarela por cima, bacon e finalize com cebolinha picada a gosto. <br>4 - Leve ao forno (230° C), por cerca de 20 minutos",
        ingredientes: ["2 batatas médias cozidas",
                        "sal a gosto",
                        "1 ovo",
                        "180g de queijo mussarela",
                        "bacon frito a gosto",
                        "1/2 lata de creme de leite<o",
                        "cebolinha a gostos"]
    },

    {   titulo: "Macarrão com Requeijão",
        imagem: "imagens/risoto.png",
        preparo: "1 - Em uma panela aqueça o azeite e doure o alho. Junte o molho de tomate e o requeijão. Tempere com sal e pimenta. <br>2 - Deixe no fogo brando até o requeijão derreter. <br>3 - Desligue o fogo e misture a mussarela e o presunto picados.<br4 - Em um refratário coloque o macarrão, despeje o molho e polvilhe o queijo ralado. Deixe por 20 minutos em forno pré-aquecido e sirva em seguida.",
        ingredientes: ["500 g de penne cozido al dente",
                        "2 colheres de alho picado",
                        "1 lata de molho de tomate",
                        "200 g de requeijão",
                        "300 g de presunto picado",
                        "300 g de mussarela picada",
                        " Queijo parmesão ralado",
                        " Sal e pimenta a gosto"]
    },
    
    {   titulo: "Carne de Panela de Pressão",
        imagem: "Imagens/Carne_pressão.png",
        preparo: "1 - Forre o fundo de uma panela de pressão com metade das cebolas.<br>2 - Esfarele um cubo de caldo de carne por cima das cebolas, adicione a carne, adicione outro cubo de caldo de carne e cubra com o restante das cebolas. <br>3 - Feche a panela de pressão, sem adicionar água, e deixe cozinhar por 25 minutos..<br4 - Se preferir, adicione batatas em rodelas e deixe cozinhar por mais 10 minutos.",
        ingredientes: ["1 kg de carne (acém, patinho ou lombo de porco)",
                        "8 cebolas grandes cortadas em rodelas",
                        "3 ou 4 cubos de caldo de carne",]
    },
    

]

function getListaIngredientes(receita) {
    const lista = receita.ingredientes.map(ingredientes => `<li>${ingredientes}</li>`).reduce((acc, cur) => acc + cur);
    return `<ul>${lista}</ul>`;       
}

function getCard(receita) {
    const listaIngredientes = getListaIngredientes(receita);
    return `
        <div class="row">
            <div class=" col-sm-4 mb-3 ">
                <div class="card" style="width: 250px">
                    <img src="${receita.imagem}" class="card-img-top" alt="${receita.titulo}">
                    <div class="card-body">
                        <h5 class="card-title">${receita.titulo}</h5>
                        <div class="card-text">
                            ${listaIngredientes}
                            <hr>
                            ${receita.preparo}
                        </div>
                    </div>
                </div>
            </div>
        </div>`       
                    

}
function preencheCatalogo() {
    const pnlCatalogo = document.getElementById('pnlCatalogo');
    const htmlReceitas = receita.map(receita => getCard(receita)).reduce((prev, curr) => prev + curr);
    pnlCatalogo.innerHTML = htmlReceitas;

}



