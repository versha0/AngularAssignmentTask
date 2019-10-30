import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleterepositoryComponent } from './deleterepository.component';

describe('DeleterepositoryComponent', () => {
  let component: DeleterepositoryComponent;
  let fixture: ComponentFixture<DeleterepositoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleterepositoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleterepositoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
