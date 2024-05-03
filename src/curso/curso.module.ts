import { Module } from '@nestjs/common';
import { CursoController } from './curso.controller';
import { CursoService } from './curso.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Curso, CursoSchema } from './schemas/curso.schema';
import { Usuario, UsuarioSchema } from 'src/usuario/schemas/usuario.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Curso.name, schema: CursoSchema }]), MongooseModule.forFeature([{ name: Usuario.name, schema: UsuarioSchema }])],
  controllers: [CursoController],
  providers: [CursoService],
  exports: [CursoService]
})
export class CursoModule {}