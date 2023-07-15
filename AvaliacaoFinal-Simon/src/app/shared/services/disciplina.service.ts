import { Injectable } from '@angular/core';
import { Disciplina } from '../modelo/disciplina';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Professor } from '../modelo/professor';

@Injectable({
  providedIn: 'root'
})
export class DisciplinaService {
  URL_DISCIPLINA = 'http://localhost:3000/disciplinas';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Disciplina[]> {
    return this.httpClient.get<Disciplina[]>(this.URL_DISCIPLINA);
  }

  inserir(disciplina: Disciplina): Observable<Disciplina> {
    return this.httpClient.post<Disciplina>(this.URL_DISCIPLINA, disciplina);
  }

  remover(id: number): Observable<object>{
    return this.httpClient.delete(`${this.URL_DISCIPLINA}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Disciplina> {
    return this.httpClient.get<Disciplina>(`${this.URL_DISCIPLINA}/${id}`);
  }

  atualizar(disciplina: Disciplina): Observable<Disciplina> {
    return this.httpClient.put<Disciplina>(`${this.URL_DISCIPLINA}/${disciplina.id}`, disciplina);
  }
}
