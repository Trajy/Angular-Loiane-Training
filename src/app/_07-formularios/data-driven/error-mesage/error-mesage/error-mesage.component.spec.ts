import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorMesageComponent } from './error-mesage.component';

describe('ErrorMesageComponent', () => {
  let component: ErrorMesageComponent;
  let fixture: ComponentFixture<ErrorMesageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorMesageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorMesageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
