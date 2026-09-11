import { Controller, Get, Post, Body } from '@nestjs/common';
import  { ClasesService } from './clases.service.js';
import type { Clase } from './clases.service.js';

@Controller('clases')
export class ClasesController {


    constructor(private readonly clasesService: ClasesService) { }

    //@Get()
    //getHello(): string {
     //   return this.clasesService.getHello();
  //  }

    @Get('clases')
    obtenerClases(): Clase[] {
        return this.clasesService.listar();
    }

    @Post('clases')
    agregarClase(@Body() nuevaClase: Clase): Clase {
        return this.clasesService.crear(nuevaClase.nombre);
    }
}