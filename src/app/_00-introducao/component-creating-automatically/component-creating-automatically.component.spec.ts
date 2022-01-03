import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentCreatingAutomaticallyComponent } from './component-creating-automatically.component';

describe('ComponentCreatingAutomaticallyComponent', () => {
  let component: ComponentCreatingAutomaticallyComponent;
  let fixture: ComponentFixture<ComponentCreatingAutomaticallyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentCreatingAutomaticallyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentCreatingAutomaticallyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
