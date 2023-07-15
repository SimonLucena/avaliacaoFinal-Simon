import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorListagemComponent } from './professor-listagem.component';

describe('ProfessorListagemComponent', () => {
  let component: ProfessorListagemComponent;
  let fixture: ComponentFixture<ProfessorListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProfessorListagemComponent]
    });
    fixture = TestBed.createComponent(ProfessorListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
