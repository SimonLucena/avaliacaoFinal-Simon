import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/shared/modelo/disciplina';
import { Professor } from 'src/app/shared/modelo/professor';
import { DisciplinaService } from 'src/app/shared/services/disciplina.service';
import { ProfessorService } from "src/app/shared/services/professor.service";

@Component({
  selector: 'app-professor-listagem',
  templateUrl: './professor-listagem.component.html',
  styleUrls: ['./professor-listagem.component.scss']
})
export class ProfessorListagemComponent {
  professores = Array<Professor>();
  disciplinas = Array<Disciplina>();

  constructor(public roteador: Router, private professorService: ProfessorService, private disciplinaService: DisciplinaService){
  }

  ngOnInit() {
    this.professorService.listar().subscribe(
      professores=>this.professores = professores
    );
  }

  editar(professor: Professor): void {
    this.roteador.navigate(['editar-professor', professor.id]);
  }

  excluir(professor: Professor): void {
    this.professorService.remover(professor.id).subscribe(
      resposta => {
        const indx = this.professores.findIndex(r => r.id === professor.id);
        if(indx > -1) {
          this.professores.splice(indx, 1);
        }
      }
    )
  }
}
