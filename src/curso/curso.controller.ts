import { Body, Controller, Delete, Get, Param, Post, Patch } from '@nestjs/common';
import { CreateCursoDto } from './dto/create-curso.dto';
import { CursoService } from './curso.service';
import { ForbiddenException } from './forbidden.exception';
import { UpdateCursoDto } from './dto/update-curso.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { UseGuards } from '@nestjs/common/decorators/core/use-guards.decorator';

@Controller('curso')
export class CursoController {
    constructor(private cursoService: CursoService) {}

  @Post()
  async create(@Body() createCursoDto: CreateCursoDto) {
    this.cursoService.create(createCursoDto);
  }

  @Get()
  @UseGuards(AuthGuard)
  async findAll(){
    return this.cursoService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard)
  findOne(@Param('id') id: string) {
    throw new ForbiddenException();
  }

  @Patch(':id')
  @UseGuards(AuthGuard)
  update(@Param('id') id: string, @Body() updateCursoDto: UpdateCursoDto) {
    return this.cursoService.update(+id, updateCursoDto);
  }

  /*
  @Patch(':id/matricular')
  matricular(@Param('id') id: string, @Body() alunos: string[]){
    return this.cursoService.matricularAlunos(id, alunos)
  }
  */

  @Delete(':id')
  @UseGuards(AuthGuard)
  remove(@Param('id') id: string) {
    return this.cursoService.remove(+id);
  }
}