import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Usuario } from 'src/usuario/schemas/usuario.schema';

export type CursoDocument = HydratedDocument<Curso>;

@Schema()
export class Curso {
  @Prop()
  nome: string;

  @Prop()
  valor: number;

  @Prop()
  duracao: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Usuario' })
  alunos: Usuario[];
}

export const CursoSchema = SchemaFactory.createForClass(Curso);