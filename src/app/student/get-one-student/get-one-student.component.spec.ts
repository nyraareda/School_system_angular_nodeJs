import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetOneStudentComponent } from './get-one-student.component';

describe('GetOneStudentComponent', () => {
  let component: GetOneStudentComponent;
  let fixture: ComponentFixture<GetOneStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GetOneStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GetOneStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
