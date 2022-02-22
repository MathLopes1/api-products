import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Produto } from './models/produtos.model';

//Decorator para definir um controller básico
@Controller('produtos')
export class ProdutosController {
  //Criando Array de Produtos
  produtos: Produto[] = [
    new Produto('LIV01', 'Livro TDD e BDD na prática', 29.9),
    new Produto('LIV01', 'Livro Iniciando em Flutter', 39.9),
    new Produto('LIV01', 'Inteligência Artificial', 29.9),
  ];

  @Get()
  obterTodos(): Produto[] {
    return this.produtos;
  }
  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtos[0];
  }
  @Post('')
  criar(@Body() produto: Produto) {
    produto.id = 100;
    this.produtos.push(produto);
  }
  @Put('')
  alterar(@Body() produto: Produto): Produto {
    return produto;
  }
  @Delete(':id')
  apagar(@Param() params) {
    this.produtos.pop();
  }
}
