import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOneStudentComponent } from './update-one-student.component';

describe('UpdateOneStudentComponent', () => {
  let component: UpdateOneStudentComponent;
  let fixture: ComponentFixture<UpdateOneStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateOneStudentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateOneStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
