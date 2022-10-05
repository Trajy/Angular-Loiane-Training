import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampoErroComponent } from './campo-erro.component';

describe('CampoErroComponent', () => {
  let component: CampoErroComponent;
  let fixture: ComponentFixture<CampoErroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampoErroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampoErroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
