import { Professor } from "./professor";

export class Disciplina {
    id: number;
    nome: string;
    cargaHoraria: number;
    professor: number;

    constructor (id=0, nome='', cargaHoraria=0, professor=0) {
        this.id = id;
        this.nome = nome;
        this.cargaHoraria = cargaHoraria;
        this.professor = professor;
    }
}