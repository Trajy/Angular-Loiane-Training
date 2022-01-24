import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeImpuroComponent } from './pipe-impuro.component';

describe('PipeImpuroComponent', () => {
  let component: PipeImpuroComponent;
  let fixture: ComponentFixture<PipeImpuroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeImpuroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeImpuroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
