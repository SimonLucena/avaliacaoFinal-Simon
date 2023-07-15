import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Professor } from 'src/app/shared/modelo/professor';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { Disciplina } from 'src/app/shared/modelo/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina.service';
import {MensagemService} from '../../../shared/services/mensagem.service';
import {IMensagem} from '../../../shared/modelo/IMensagem';


@Component({
  selector: 'app-professor-cadastro',
  templateUrl: './professor-cadastro.component.html',
  styleUrls: ['./professor-cadastro.component.scss']
})
export class ProfessorCadastroComponent {
  nomeBotao = 'Cadastrar';
  professor: Professor;
  professores = Array<Professor>();
  disciplinas = Array<Disciplina>();
  opCadastro = true;

  constructor(private rotaA: ActivatedRoute, private professorService: ProfessorService, private roteador:Router, private disciplinaService: DisciplinaService, private mensagemService: IMensagem){
    this.professor = new Professor();

    if(this.rotaA.snapshot.paramMap.has('id')){
      this.nomeBotao = 'Editar';
      this.opCadastro=false;
      const idEdit = Number(this.rotaA.snapshot.paramMap.get('id'));
      this.professorService.pesquisarPorId(idEdit).subscribe(
        professorReturned => this.professor = professorReturned
      );
    }
  }

  ngOnInit(): void {
    this.disciplinaService.listar().subscribe(
      disciplinas=>this.disciplinas = disciplinas
    );
  }

  cadastrar(): void {
    if(this.professor.id){
      this.professorService.atualizar(this.professor).subscribe(
        professorAlt => this.mensagemService.sucesso('Professor atualizado com sucesso!')
      );
    }else{
      this.professorService.inserir(this.professor).subscribe(
        professorInsert => this.mensagemService.sucesso('Professor atualizado com sucesso!')
      )
    }
    this.roteador.navigate(['listar-professor']);
  }
}
