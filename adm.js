//-------------------------------------------//
        //ÁREA DE CADASTRO DE PRODUTOS//
//-------------------------------------------//

var index = produtos.indexof("");


function cadastrarProduto() {


    document.querySelector('#btn-success').addEventListener("click", e => {

    function renderEstoque() {
        const estoque = getEstoque()
        estoque.forEach(estoque => addNomeMarcaClasseToEstoque(estoque));
    }
    function addNomeMarcaQuantidadeToEstoque (estoque) {

    };
    const Nome = document.querySelector('#Nome').value
    const Marca = document.querySelector('#Marca').value
    const Quantidade = document.querySelector('#Quantidade').value
    const Textarea = document.querySelector('#Textarea').value
  
    if (!Nome || !Marca || !Quantidade || !Textarea) {
        alert("Não deixe os campos em branco")
        return;
    }
    const cadastrar = {Nome, Marca, Quantidade, Textarea}

    const estoque = localStorage.estoque ? JSON.parse(localStorage.estoque) : []
    estoque.push(cadastrar);

    const getEstoque = () => {
        return localStorage.estoque ? JSON.parse(localStorage.estoque) : []
    }
    localStorage.estoque = JSON.stringify(estoque);
    alert("Parabens, mais produtos foram cadastrados")

    document.querySelector('#Nome').value = ""
    document.querySelector('#Marca').value = ""
    document.querySelector('#Quantidade').value = ""
    document.querySelector('#Textarea').value = ""

    console.log(estoque)

    });
    
}