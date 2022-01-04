import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParaTestarDiretivaDeEstruturaComponent } from './component-para-testar-diretiva-de-estrutura.component';

describe('ComponentParaTestarDiretivaDeEstruturaComponent', () => {
  let component: ComponentParaTestarDiretivaDeEstruturaComponent;
  let fixture: ComponentFixture<ComponentParaTestarDiretivaDeEstruturaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentParaTestarDiretivaDeEstruturaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParaTestarDiretivaDeEstruturaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
