import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiretivaNgForComponent } from './diretiva-ng-for.component';

describe('DiretivaNgForComponent', () => {
  let component: DiretivaNgForComponent;
  let fixture: ComponentFixture<DiretivaNgForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiretivaNgForComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiretivaNgForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
