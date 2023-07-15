import { Disciplina } from "./disciplina";

export class Professor {
    id: number;
    nome: string;
    email: string;
    disciplinas: Array<number>;

    constructor (id=0, nome='', email='', disciplinas=[]) {
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.disciplinas = disciplinas;
    }
}