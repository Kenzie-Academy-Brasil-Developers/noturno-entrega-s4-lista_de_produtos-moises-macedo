import produtos from './dataProdutos.js'

const ul = document.querySelector('.containerListaProdutos ul');

    

const montarListaProdutos = (listaProdutos) =>{

    ul.innerHTML = '';

    

    listaProdutos.forEach((produto) =>{
        

        const li = document.createElement('li');
        const img = document.createElement('img');
        const h3 = document.createElement('h3');        
        const p = document.createElement('p');
        const span = document.createElement('span');

        ///////////////////////////////////

        img.src = produto.img;
        img.alt = produto.nome;
        h3.innerText = produto.nome;        
        p.innerText = 'RS' + produto.preco + ',00';
        span.innerText = produto.secao;

        p.style.fontSize = '13px'
        p.style.marginTop = '7px'
        

        
        

        ///////////////////////////////////

        li.appendChild(img);
        li.appendChild(h3);
        
        li.appendChild(p)
        li.appendChild(span);

        ul.appendChild(li);

        
    });
    

    

}


const filtrarPorHortiFruti = () =>{

    const listaHortifruti = produtos.filter((produto) => {

        return produto.secao === 'Hortifruti';


    });
    montarListaProdutos(listaHortifruti);

}

const botaoMostrarHortifruti = document.querySelector('.estiloGeralBotoes--filtrarHortifruti');

botaoMostrarHortifruti.addEventListener('click', filtrarPorHortiFruti);


/////////////////////////////////////////



const mostrartodos = () =>{

    const listaTodosprodutos = produtos.filter((produto) => {

        return produto.categoria !== ''


    });
    montarListaProdutos(listaTodosprodutos);

}


const botaoMostrarTodos = document.querySelector('.estiloGeralBotoes--mostrarTodos');

botaoMostrarTodos.addEventListener('click', mostrartodos);


/////////////////////////////////////////

// let soma = produtos.filter(produtos => produtos.preco === 2) 

// const botaoBarato = document.querySelector('.estiloGeralBotoes--filtrarBarato');

// botaoBarato .addEventListener('click', soma);

const baratoDia = () =>{

    const baratoDia = produtos.filter((produto) => {

        return produto.preco > 3


    });
    montarListaProdutos(baratoDia);

}
const botaoBaratoDia = document.querySelector('.estiloGeralBotoes--filtrarBarato');

botaoBaratoDia.addEventListener('click', baratoDia );

////////////////////////////////////////////////



function pesquisa(){

    const CaixaPesquisa = produtos.filter((produto) => {

        return produto.nome.buttonPesquisa 


    });
    montarListaProdutos(CaixaPesquisa);
    const input = document.querySelector('.campoBuscaPorNome') 

}



const buttonPesquisa = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome')
buttonPesquisa.addEventListener('click',  pesquisa );








