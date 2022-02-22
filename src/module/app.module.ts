import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize/dist/sequelize.module';
import { AppController } from '../controllers/app.controller';
import { AppService } from '../service/app.service';
import { Livros } from '../models/livro.model';
import { LivrosController } from '../controllers/livros.controller';
import { LivrosService } from '../service/livros.service';
@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'matheus86063446@',
      database: 'livraria',
      autoLoadModels: true,
      synchronize: true,
    }),
    SequelizeModule.forFeature([Livros]),
  ],
  controllers: [AppController, LivrosController],
  providers: [AppService, LivrosService],
})
export class AppModule {}
