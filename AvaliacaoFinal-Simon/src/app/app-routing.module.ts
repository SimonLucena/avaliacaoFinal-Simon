import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfessorCadastroComponent } from './class/professor/professor-cadastro/professor-cadastro.component';
import { ProfessorListagemComponent } from './class/professor/professor-listagem/professor-listagem.component';
import { DisciplinaCadastroComponent } from './class/disciplina/disciplina-cadastro/disciplina-cadastro.component';
import { DisciplinaListagemComponent } from './class/disciplina/disciplina-listagem/disciplina-listagem.component';


const routes: Routes = [
  {
    path: 'cadastrar-professor',
    component: ProfessorCadastroComponent
  },
  {
    path: 'editar-professor/:id',
    component: ProfessorCadastroComponent
  },
  {
    path: 'listar-professor',
    component: ProfessorListagemComponent
  },
  {
    path: 'cadastrar-disciplina',
    component: DisciplinaCadastroComponent
  },
  {
    path: 'editar-disciplina/:id',
    component: DisciplinaCadastroComponent
  },
  {
    path: 'listar-disciplina',
    component: DisciplinaListagemComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
