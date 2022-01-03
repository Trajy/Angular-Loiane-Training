import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgContentExempleComponent } from './ng-content-exemple.component';

describe('NgContentExempleComponent', () => {
  let component: NgContentExempleComponent;
  let fixture: ComponentFixture<NgContentExempleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgContentExempleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgContentExempleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
