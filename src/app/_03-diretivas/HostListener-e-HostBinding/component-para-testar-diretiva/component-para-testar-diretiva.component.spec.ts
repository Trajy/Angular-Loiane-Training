import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParaTestarDiretivaComponent } from './component-para-testar-diretiva.component';

describe('ComponentParaTestarDiretivaComponent', () => {
  let component: ComponentParaTestarDiretivaComponent;
  let fixture: ComponentFixture<ComponentParaTestarDiretivaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentParaTestarDiretivaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParaTestarDiretivaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
