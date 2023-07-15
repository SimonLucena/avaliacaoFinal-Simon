import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Disciplina } from 'src/app/shared/modelo/disciplina';
import { DisciplinaService } from 'src/app/shared/services/disciplina.service';
import { ProfessorService } from 'src/app/shared/services/professor.service';
import { Professor } from 'src/app/shared/modelo/professor';
import {IMensagem} from '../../../shared/modelo/IMensagem';

@Component({
  selector: 'app-disciplina-cadastro',
  templateUrl: './disciplina-cadastro.component.html',
  styleUrls: ['./disciplina-cadastro.component.scss']
})
export class DisciplinaCadastroComponent {
  nomeBotao = 'Cadastrar';
  disciplina: Disciplina;
  disciplinas = Array<Disciplina>();
  professores = Array<Professor>();
  opCadastro = true;

  constructor(private rotaA: ActivatedRoute, private disciplinaService: DisciplinaService, private roteador:Router, private professorService: ProfessorService, private mensagemService: IMensagem){
    this.disciplina = new Disciplina();

    if(this.rotaA.snapshot.paramMap.has('id')){
      this.nomeBotao = 'Editar';
      this.opCadastro=false;
      const idEdit = Number(this.rotaA.snapshot.paramMap.get('id'));
      this.disciplinaService.pesquisarPorId(idEdit).subscribe(
        disciplinaReturned => this.disciplina = disciplinaReturned
      );
    }
  }

  ngOnInit(): void {
    this.disciplinaService.listar().subscribe(
      disciplinas=>this.disciplinas = disciplinas
    );
    this.professorService.listar().subscribe(
      professores=>this.professores = professores
    );
  }

  echo(){
    this.disciplina.professor = 1;
    console.log(this.disciplina);
  }

  cadastrar(): void {
    if(this.disciplina.id){
      this.disciplinaService.atualizar(this.disciplina).subscribe(
        disciplinaAlt => this.mensagemService.sucesso('Disciplina atualizada com sucesso!')
      );
    }else{
      this.disciplinaService.inserir(this.disciplina).subscribe(
        disciplinaInsert => this.mensagemService.sucesso('Disciplina atualizada com sucesso!')
        );
    }
    this.roteador.navigate(['listar-disciplina'])
  }
}
