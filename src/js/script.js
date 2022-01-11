import produtos from './dataProdutos.js'

const ul = document.querySelector('.containerListaProdutos ul');
//const valorSoma = document.getElementById('precoTotal')
// var soma= produtos.reduce(reducer, {preco:0});
// valorSoma.innerText=soma
const MostraPreco=(arrayProdutos) =>{

    const valorSoma = document.getElementById('precoTotal')

    

    const SomandoTudo = arrayProdutos.reduce((Acumulador, produto) => {


        return Acumulador + produto.preco
    }, 0);

    //montarListaProdutos(SomandoTudo);

    valorSoma.innerText= SomandoTudo

}





    

const montarListaProdutos = (listaProdutos) =>{

    ul.innerHTML = '';
    //valorSoma.innerText=produto.nome

    

    

    


    

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
        span.innerText = produto.secao 
        //valorSoma.innerText=produto.preco +produto.preco
        // 
        
         
        p.style.fontSize = '13px'
        p.style.marginTop = '7px'
        

        
        

        ///////////////////////////////////

        li.appendChild(img);
        li.appendChild(h3);
        
        li.appendChild(p)
        li.appendChild(span);

        ul.appendChild(li);

        
    });
    
    MostraPreco(listaProdutos)
    

}





const filtrarPorHortiFruti = () =>{  
    
        

    const listaHortifruti = produtos.filter((produto) => {
        
        
        
        

        return produto.secao === 'Hortifruti';


    });
    montarListaProdutos(listaHortifruti)

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

const InforPadaria = () =>{

    // let soma = document.getElementById(precoTotal);

    // const valortotal= produtos.preco + produtos.preco

    // soma.innerText=valortotal

    

    

    // soma = produtos.filter((produto) => {
    //     return produto.preco += produto.preco =''



    // });

    // const soma = produtos.filter((produto) => {

    //     return produto.preco + produto.preco
        


    // });

    // let i = []

    // let (contador = 0; contador < produtos.length; contador ++)

    const padaria = produtos.filter((produto) => {

        return produto.secao === 'Panificadora'      


    })
    
    montarListaProdutos(padaria);

}
const botaoBaratoDia = document.querySelector('.estiloGeralBotoes--filtrarBarato');

botaoBaratoDia.addEventListener('click', InforPadaria);

////////////////////////////////////////////////



const inputPesquisa= () => {

    const input = document.querySelector('.campoBuscaPorNome').value;

    const listaBusca = produtos.filter((produto) => {


        return produto.nome.toLowerCase() === input.toLowerCase()

    })
    montarListaProdutos(listaBusca)
}

const botaoBusca = document.querySelector('.estiloGeralBotoes--botaoBuscaPorNome');
botaoBusca.addEventListener('click', inputPesquisa);

// const MostraPreco=() =>{
//     const valorSoma = document.getElementById('precoTotal')

    

//     const SomandoTudo = produtos.reduce((produto) => {


//         return produto.preco + produto.preco
//     });

//     montarListaProdutos(SomandoTudo);

//     valorSoma.innerText= MostraPreco

// }










