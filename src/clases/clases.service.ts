import { Injectable } from '@nestjs/common';

export interface Clase {
  id: number;
  nombre: string;
}

const clases: Clase[] = [
  { id: 1, nombre: 'Yoga' },
  { id: 2, nombre: 'Spinning' },
  { id: 3, nombre: 'Pilates' },
];


@Injectable()
export class ClasesService {
    listar(): Clase[] {
        return clases;
    }

    crear(nombre : string): Clase {
        const nuevaClase: Clase = { id: clases.length + 1, nombre };
        clases.push(nuevaClase);
        return nuevaClase;
    }




}  