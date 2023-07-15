import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisciplinaListagemComponent } from './disciplina-listagem/disciplina-listagem.component';
import { DisciplinaCadastroComponent } from './disciplina-cadastro/disciplina-cadastro.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatBadgeModule } from '@angular/material/badge';
import { RouterLink } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [
    DisciplinaListagemComponent,
    DisciplinaCadastroComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatBadgeModule,
    RouterLink,
    BrowserAnimationsModule,
    MatGridListModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule
  ]
})
export class DisciplinaModule { }
