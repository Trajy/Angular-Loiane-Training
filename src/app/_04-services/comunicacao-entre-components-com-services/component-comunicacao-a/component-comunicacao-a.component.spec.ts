import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComunicacaoAComponent } from './component-comunicacao-a.component';

describe('ComponentComunicacaoAComponent', () => {
  let component: ComponentComunicacaoAComponent;
  let fixture: ComponentFixture<ComponentComunicacaoAComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentComunicacaoAComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComunicacaoAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
