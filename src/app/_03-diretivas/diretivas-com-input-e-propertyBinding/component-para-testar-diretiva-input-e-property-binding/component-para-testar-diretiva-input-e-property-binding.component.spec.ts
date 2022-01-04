import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentParaTestarDiretivaInputEPropertyBindingComponent } from './component-para-testar-diretiva-input-e-property-binding.component';

describe('ComponentParaTestarDiretivaInputEPropertyBindingComponent', () => {
  let component: ComponentParaTestarDiretivaInputEPropertyBindingComponent;
  let fixture: ComponentFixture<ComponentParaTestarDiretivaInputEPropertyBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentParaTestarDiretivaInputEPropertyBindingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentParaTestarDiretivaInputEPropertyBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
