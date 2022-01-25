import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroManeiraCorretaComponent } from './filtro-maneira-correta.component';

describe('FiltroManeiraCorretaComponent', () => {
  let component: FiltroManeiraCorretaComponent;
  let fixture: ComponentFixture<FiltroManeiraCorretaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltroManeiraCorretaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroManeiraCorretaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
