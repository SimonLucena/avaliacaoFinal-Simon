import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessorModule } from './class/professor/professor.module';
import { DisciplinaModule } from './class/disciplina/disciplina.module';
import {FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from './layout/layout.module';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MensagemService} from './shared/services/mensagem.service';
import {IMensagem} from './shared/modelo/IMensagem';



@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfessorModule,
    DisciplinaModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    HttpClientModule,
    MatSnackBarModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    HttpClientModule
  ],
  providers: [ 
    {
    provide: IMensagem,
    useClass: MensagemService
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
