import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CriandoUmPipeComponent } from './criando-um-pipe.component';

describe('CriandoUmPipeComponent', () => {
  let component: CriandoUmPipeComponent;
  let fixture: ComponentFixture<CriandoUmPipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CriandoUmPipeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CriandoUmPipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
