import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllRepositoriesCompComponent } from './all-repositories-comp.component';

describe('AllRepositoriesCompComponent', () => {
  let component: AllRepositoriesCompComponent;
  let fixture: ComponentFixture<AllRepositoriesCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllRepositoriesCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllRepositoriesCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
