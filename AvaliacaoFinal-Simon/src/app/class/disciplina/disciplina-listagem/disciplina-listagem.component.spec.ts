import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisciplinaListagemComponent } from './disciplina-listagem.component';

describe('DisciplinaListagemComponent', () => {
  let component: DisciplinaListagemComponent;
  let fixture: ComponentFixture<DisciplinaListagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DisciplinaListagemComponent]
    });
    fixture = TestBed.createComponent(DisciplinaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
