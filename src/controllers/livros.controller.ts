import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { LivrosService } from 'src/service/livros.service';
import { Livros } from '../models/livro.model';

//Decorator para definir um controller básico
@Controller('livros')
export class LivrosController {
  //Criando Array de Livros
  constructor(private livrosService: LivrosService) {}
  @Get()
  obterTodos(): Livros[] {
    return this.livrosService.obterTodos();
  }
  @Get(':id')
  obterUm(@Param() params): Livros {
    return this.livrosService.obterUm(params.id);
  }
  @Post('')
  criar(@Body() livro: Livros) {
    livro.id = 100;
    this.livrosService.criar(livro);
  }
  @Put('')
  alterar(@Body() livro: Livros): Livros {
    return this.livrosService.alterar(livro);
  }
  @Delete(':id')
  apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
