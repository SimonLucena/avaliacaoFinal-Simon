import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfessorListagemComponent } from './professor-listagem/professor-listagem.component';
import { ProfessorCadastroComponent } from './professor-cadastro/professor-cadastro.component';
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


@NgModule({
  declarations: [
    ProfessorListagemComponent,
    ProfessorCadastroComponent,
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    FormsModule,
    MatBadgeModule,
    RouterLink,
    BrowserAnimationsModule,
    MatGridListModule,
    MatRadioModule,
    ReactiveFormsModule,
  ],
  exports: [
    ProfessorListagemComponent,
    ProfessorCadastroComponent,
  ]
})
export class ProfessorModule { }
