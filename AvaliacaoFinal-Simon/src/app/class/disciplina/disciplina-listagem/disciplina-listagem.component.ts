import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Disciplina } from 'src/app/shared/modelo/disciplina';
import { Professor } from 'src/app/shared/modelo/professor';
import { DisciplinaService } from 'src/app/shared/services/disciplina.service';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import {MatTableDataSource} from '@angular/material/table';
import {IMensagem} from '../../../shared/modelo/IMensagem';

@Component({
  selector: 'app-disciplina-listagem',
  templateUrl: './disciplina-listagem.component.html',
  styleUrls: ['./disciplina-listagem.component.scss']
})
export class DisciplinaListagemComponent{
  disciplinas = Array<Disciplina>();
  professores = Array<Professor>();

  dataSource: MatTableDataSource<Disciplina>;
  Colunas: Array<string> = ['ID', 'Nome', 'Carga Horária', 'Professor', 'Ação'];

  constructor(public roteador: Router, private disciplinaService: DisciplinaService, private professorService: ProfessorService, private mensagemService: IMensagem){
    this.dataSource = new MatTableDataSource();
  }

  buscarProf(profId: number) {
    return 
  }

  ngOnInit() {
    this.disciplinaService.listar().subscribe(
      disciplinas=>this.dataSource  = new MatTableDataSource(disciplinas)
    );
    this.professorService.listar().subscribe(
      professores=>this.professores = professores
    );
  }

  editar(disciplina: Disciplina): void {
    this.roteador.navigate(['editar-disciplina', disciplina.id]);
  }

  excluir(disciplina: Disciplina): void {
    this.disciplinaService.remover(disciplina.id).subscribe(
      resposta => {
        const indx = this.dataSource.data.findIndex(r => 
          r.id === disciplina.id);
        if(indx > 0) {
          this.disciplinas.splice(indx, 1);
          this.dataSource = new MatTableDataSource<Disciplina>(this.dataSource.data);
          this.mensagemService.erro('Usuário removido com sucesso!');
        }
      }
    )
  }
}
