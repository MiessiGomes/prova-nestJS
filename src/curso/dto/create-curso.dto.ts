import { IsString, IsNumber } from 'class-validator';
export class CreateCursoDto {
    @IsString()
    nome: string;
    alunos: string;

    @IsNumber()
    valor: number;
    duracao: number;
  }