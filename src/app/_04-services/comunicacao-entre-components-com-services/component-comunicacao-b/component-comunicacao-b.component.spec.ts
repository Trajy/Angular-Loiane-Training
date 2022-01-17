import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentComunicacaoBComponent } from './component-comunicacao-b.component';

describe('ComponentComunicacaoBComponent', () => {
  let component: ComponentComunicacaoBComponent;
  let fixture: ComponentFixture<ComponentComunicacaoBComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentComunicacaoBComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentComunicacaoBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
