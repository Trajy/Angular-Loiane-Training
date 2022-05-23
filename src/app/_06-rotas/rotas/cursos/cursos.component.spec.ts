import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosRotasComponent } from './cursos.component';

describe('CursosComponent', () => {
  let component: CursosRotasComponent;
  let fixture: ComponentFixture<CursosRotasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosRotasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CursosRotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
