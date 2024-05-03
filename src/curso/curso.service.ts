import { Injectable } from '@nestjs/common';
import { CursoInterface } from './interfaces/curso.interface';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Curso } from './schemas/curso.schema';
import { Model } from 'mongoose';
import { CreateCursoDto } from './dto/create-curso.dto';
import { Usuario } from 'src/usuario/schemas/usuario.schema';

@Injectable()
export class CursoService {
  constructor(@InjectModel(Curso.name) private cursoModel: Model<Curso>, @InjectModel(Usuario.name) private usuarioModel: Model<Usuario>){}
  
  async create(createCursoDto: CreateCursoDto) {
    const createdCurso = new this.cursoModel(createCursoDto);
    return createdCurso.save();
  }

  /*
  async matricularAlunos(id: string, alunos: string[]) {
    var usuariosMatricula = [];
    for(var i = 0; i < alunos.length; i++) {
      var lista = await this.usuarioModel.findById(alunos[i])
      usuariosMatricula.push(lista);
    };
    console.log(lista);
    //return this.cursoModel.findByIdAndUpdate(id, {alunos: usuariosMatricula}).exec();
  }
  */

  findAll(){
    return this.cursoModel.find().select('-senha').exec();
  }

  findOne(id: string) {
    return this.cursoModel.findById(id).select('-senha').exec();
  }

  update(id: number, updateCursoDto: UpdateCursoDto) {
    return this.cursoModel.findByIdAndUpdate(id, updateCursoDto).exec();
  }

  remove(id: number) {
    return this.cursoModel.findByIdAndDelete(id).exec();
  }
  
  private readonly curso: CursoInterface[] = [];

}