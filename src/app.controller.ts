import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service.js';



interface Clase {
  id: number;
  nombre: string;
}

@Controller()
export class AppController {
  private clases: Clase[] = [
    { id: 1, nombre: 'Yoga' },
    { id: 2, nombre: 'Spinning' },
    { id: 3, nombre: 'Pilates' },
  ];

  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('clases')
  obtenerClases(): Clase[] {
    return this.clases;
  }

  @Post('clases')
  agregarClase(@Body() nuevaClase: Clase): Clase {
    this.clases.push(nuevaClase);
    return nuevaClase;
  }
}