import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Livros } from 'src/models/livro.model';

//Decorator injectable tornando a classe em um provider
@Injectable()
export class LivrosService {
  constructor(@InjectModel(Livros) private livroModel: typeof Livros) {}

  async obterTodos(): Promise<Livros[]> {
    return this.livroModel.findAll();
  }
  async obterUm(id: number): Promise<Livros> {
    return this.livroModel.findByPk(id);
  }
  async criar(livro: Livros) {
    this.livroModel.create(livro);
  }
  async alterar(livro: Livros): Promise<[number, Livros[]]> {
    return this.livroModel.update(livro, {
      where: {
        id: livro.id,
      },
    });
  }
  async apagar(id: number) {
    const livro: Livros = await this.obterUm(id);
    livro.destroy();
  }
}
