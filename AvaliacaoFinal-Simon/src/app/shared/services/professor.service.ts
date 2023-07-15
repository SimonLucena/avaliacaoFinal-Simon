import { Injectable } from '@angular/core';
import { Professor } from '../modelo/professor';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {
  URL_PROFESSOR = 'http://localhost:3000/professores';

  constructor(private httpClient: HttpClient) { }

  listar(): Observable<Professor[]> {
    return this.httpClient.get<Professor[]>(this.URL_PROFESSOR);
  }

  inserir(professor: Professor): Observable<Professor> {
    return this.httpClient.post<Professor>(this.URL_PROFESSOR, professor);
  }

  remover(id: number): Observable<object>{
    return this.httpClient.delete(`${this.URL_PROFESSOR}/${id}`);
  }

  pesquisarPorId(id: number): Observable<Professor> {
    return this.httpClient.get<Professor>(`${this.URL_PROFESSOR}/${id}`);
  }

  atualizar(professor: Professor): Observable<Professor> {
    return this.httpClient.put<Professor>(`${this.URL_PROFESSOR}/${professor.id}`, professor);
  }
}
