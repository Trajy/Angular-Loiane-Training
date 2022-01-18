import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsandoPipesParametrosEPipesAninhadosComponent } from './usando-pipes-parametros-e-pipes-aninhados.component';

describe('UsandoPipesParametrosEPipesAninhadosComponent', () => {
  let component: UsandoPipesParametrosEPipesAninhadosComponent;
  let fixture: ComponentFixture<UsandoPipesParametrosEPipesAninhadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsandoPipesParametrosEPipesAninhadosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsandoPipesParametrosEPipesAninhadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
