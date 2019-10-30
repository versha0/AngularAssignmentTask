import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaterepositoryComponent } from './createrepository.component';

describe('CreaterepositoryComponent', () => {
  let component: CreaterepositoryComponent;
  let fixture: ComponentFixture<CreaterepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaterepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaterepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
