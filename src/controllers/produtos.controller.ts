import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProdutosService } from 'src/service/produtos.service';
import { Produto } from '../models/produtos.model';

//Decorator para definir um controller básico
@Controller('produtos')
export class ProdutosController {
  //Criando Array de Produtos
  constructor(private produtosService: ProdutosService) {}
  @Get()
  obterTodos(): Produto[] {
    return this.produtosService.obterTodos();
  }
  @Get(':id')
  obterUm(@Param() params): Produto {
    return this.produtosService.obterUm(params.id);
  }
  @Post('')
  criar(@Body() produto: Produto) {
    produto.id = 100;
    this.produtosService.criar(produto);
  }
  @Put('')
  alterar(@Body() produto: Produto): Produto {
    return this.produtosService.alterar(produto);
  }
  @Delete(':id')
  apagar(@Param() params) {
    this.produtosService.apagar(params.id);
  }
}
