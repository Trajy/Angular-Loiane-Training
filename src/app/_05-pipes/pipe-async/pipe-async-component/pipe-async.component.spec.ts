import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeAsyncComponent } from './pipe-async.component';

describe('PipeAsyncComponent', () => {
  let component: PipeAsyncComponent;
  let fixture: ComponentFixture<PipeAsyncComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeAsyncComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeAsyncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
