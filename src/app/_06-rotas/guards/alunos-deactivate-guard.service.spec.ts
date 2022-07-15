import { TestBed } from '@angular/core/testing';
import { AlunosDeactivateGuard } from './alunos-deactivate.guard';

describe('AlunosDeactivateGuardService', () => {
  let service: AlunosDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlunosDeactivateGuard);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
})
