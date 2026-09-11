import { Controller, Delete, Get, NotFoundException, Param, Post } from '@nestjs/common';
import { InscripcionesService } from './inscripciones.service.js';
import { aInscripcionDto } from './dto/inscripcion-respuesta.dto.js';

@Controller('inscripciones')
export class InscripcionesController {
    constructor(private readonly servicio: InscripcionesService
    ) { }

    @Get()
    async listar() {
        const lista = await this.servicio.listar();
        return lista.map(aInscripcionDto);
    }

    @Get(":id")
    async buscar(@Param("id") id: string) {
        const inscripcion = await this.servicio.buscar(Number (id));

        if(!inscripcion) {
            throw new NotFoundException(`No existe la inscripcion con id ${id}`);
        }

        return aInscripcionDto(inscripcion);
    }

    @Post()
    async crear() {

    }

    @Delete(":id")
    async cancelar(@Param("id") id: string) {
        const inscripcion = await this.servicio.cancelar(Number(id));
        return aInscripcionDto(inscripcion);
    }


}
