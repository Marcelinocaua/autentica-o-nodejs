function mostrarTela(request, response){
    response.render('produto');
}

function adicionarProduto(request, response){
    console.log('Entrou na Funcão de Adicionar Produto');
  //  console.log(request);

    response.redirect('/produto')
}

module.exports = {
    mostrarTela,
    adicionarProduto
}