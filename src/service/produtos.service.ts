import { Injectable } from '@nestjs/common';
import { Produto } from 'src/models/produtos.model';

//Decorator injectable tornando a classe em um provider
@Injectable()
export class ProdutosService {
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV01', 'Livro Iniciando em Flutter', 39.9),
    new Produto('LIV01', 'Inteligência Artificial', 29.9),
  ];

  obterTodos(): Produto[] {
    return this.produtos;
  }
  obterUm(id: number): Produto {
    return this.produtos[0];
  }
  criar(produto: Produto) {
    this.produtos.push(produto);
  }

  alterar(produto: Produto) {
    return produto;
  }
  apagar(id: number) {
    this.produtos.pop();
  }
}
