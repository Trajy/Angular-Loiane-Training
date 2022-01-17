import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceberCursoComponent } from './receber-curso.component';

describe('ReceberCursoComponent', () => {
  let component: ReceberCursoComponent;
  let fixture: ComponentFixture<ReceberCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceberCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceberCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
