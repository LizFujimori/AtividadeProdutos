 // divListaProduto.insertAdjacentHTML('afterbegin', '');
 class Produto {
    constructor (nome, dataCadastro, descricao, preco){
    this.nome = nome;
    this.dataCadastro = dataCadastro;
    this.descricao = descricao;
    this.preco = preco;
  }
  mostrarProdutos (){
    return this.nome + this.dataCadastro + this.descricao + this.preco ;
  }
  }
  
  const produto = new Produto("Agrade a Noelle", "21-03-00005", "Boneca", "R$ 375");
  console.log(produto.mostrarProdutos())
  
  class ProdutosDestaque extends Produto{
    constructor (nome, dataCadastro, descricao,  preco, imagemDestaque){
      super(nome, dataCadastro, descricao, preco, imagemDestaque)
      this.imagemDestaque = imagemDestaque;
    }
    mostrarProdutosDestaque (){
        return `
        <h1 class = "ulala">${this.nome}</h1>
        <h4> ${this.dataCadastro}</h4>
        <img src="${this.imagemDestaque}" style="height: 350px"/>
        <p> ${this.descricao}</p>
        <p> ${this.preco}</p>
        ` 
       // return this.nome + this.dataCadastro + this.descricao + this.preco + this.imagemDestaque;
     }
  }   
  const produtosDestaque = new ProdutosDestaque("Agrade a Noelle", "21-03-0000", "Boneca", "R$ 375", "https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/noelle/image.png?strip=all&quality=100&w=160");
  //console.log(produtosDestaque.mostrarProdutosDestaque())
  
  
  const produtos = document.getElementById("produto-destaque")
  produtos.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());
  
  
  class ProdutosdaLista extends Produto{
    constructor (nome, dataCadastro, descricao,  preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4){
      super(nome, dataCadastro, descricao, preco, imagemDestaque, nome2, descricao2, preco2, nome3, descricao3, preco3, nome4, descricao4, preco4)
      this.imagemDestaque = imagemDestaque;
      this.nome2 = nome2;
      this.descricao2 = descricao2;
      this.preco2 = preco2;
      this.nome3 = nome3;
      this.descricao3 = descricao3;
      this.preco3 = preco3;
      this.nome4 = nome4;
      this.descricao4 = descricao4;
      this.preco4 = preco4;
    }
  mostrarListaProdutos() {
    return `
      
      <div class="listinha">
    <div class="grid-container">
      <div class="coluna">
      <h4>${this.nome2}</h4>
      <p>${this.descricao2}</p>
      <p>${this.preco2}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome3}</h4>
      <p>${this.descricao3}</p>
      <p>${this.preco3}</p>
      </div>
      <div class="coluna">
      <h4>${this.nome4}</h4>
      <p>${this.descricao4}</p>
      <p>${this.preco4}</p>
      </div>
    </div>
  </div>
    `;
  }
  }
  
  const produtosLIsta = new ProdutosdaLista("Crisântemo", "14-03-2029", "FLor", "R$ 149,99", "https://i2.wp.com/gi-builds.sfo3.digitaloceanspaces.com/characters/noelle/image.png?strip=all&quality=100&w=160", "Crisântemo Prateado", "R$ 576", " ", "Dente-de-leão", "R$ 75", " ", "Leite", "R$ 220");
  
  const listaProdutos = document.getElementById("lista-produtos")
  listaProdutos.insertAdjacentHTML('afterbegin', produtosLIsta.mostrarListaProdutos());
  //const listaProdutos = document.getElementById("lista-produtos")
  //divListaProduto.insertAdjacentHTML('afterbegin', produtosDestaque.mostrarProdutosDestaque());