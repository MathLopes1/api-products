import { Injectable } from '@nestjs/common';
import { Livros } from 'src/models/livro.model';

//Decorator injectable tornando a classe em um provider
@Injectable()
export class LivrosService {
  livros: Livros[] = [
    new Livros('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Livros('LIV01', 'Livro Iniciando em Flutter', 39.9),
    new Livros('LIV01', 'Inteligência Artificial', 29.9),
  ];

  obterTodos(): Livros[] {
    return this.livros;
  }
  obterUm(id: number): Livros {
    return this.livros[0];
  }
  criar(livro: Livros) {
    this.livros.push(livro);
  }

  alterar(livro: Livros) {
    return livro;
  }
  apagar(id: number) {
    this.livros.pop();
  }
}
