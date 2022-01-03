import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgStyleComponent } from './diretiva-ng-style.component';

describe('DiretivaNgStyleComponent', () => {
  let component: DiretivaNgStyleComponent;
  let fixture: ComponentFixture<DiretivaNgStyleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgStyleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
