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
  async obterTodos(): Promise<Livros[]> {
    return this.livrosService.obterTodos();
  }
  @Get(':id')
  async obterUm(@Param() params): Promise<Livros> {
    return this.livrosService.obterUm(params.id);
  }
  @Post('')
  async criar(@Body() livro: Livros) {
    this.livrosService.criar(livro);
  }
  @Put('')
  async alterar(@Body() livro: Livros): Promise<[number, Livros[]]> {
    return this.livrosService.alterar(livro);
  }
  @Delete(':id')
  async apagar(@Param() params) {
    this.livrosService.apagar(params.id);
  }
}
