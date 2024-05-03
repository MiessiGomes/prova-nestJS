import { Module, NestModule, MiddlewareConsumer, RequestMethod  } from '@nestjs/common';
import { ValueMiddleware } from './curso/logger.middleware';
import { CursoController } from './curso/curso.controller';
import { CursoModule } from './curso/curso.module';
import { UsuarioModule } from './usuario/usuario.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';



@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest'), CursoModule, UsuarioModule, AuthModule, UsersModule],
  controllers: [CursoController],
  //providers: [CursoService],
})

export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(ValueMiddleware)
      .forRoutes({ path: 'curso', method: RequestMethod.GET });
  }
}