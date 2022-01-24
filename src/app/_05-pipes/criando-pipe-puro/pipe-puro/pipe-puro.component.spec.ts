import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipePuroComponent } from './pipe-puro.component';

describe('PipePuroComponent', () => {
  let component: PipePuroComponent;
  let fixture: ComponentFixture<PipePuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipePuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipePuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
