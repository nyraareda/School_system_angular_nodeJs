import { Component, OnInit } from '@angular/core';
import { DbStudent } from '../../_models/db-student';
import { DbStudentService } from '../../_services/db-student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  standalone:true,
  imports:[CommonModule,FormsModule],
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {
  updatestd: DbStudent = new DbStudent(0, "", 0, "");
  selectedFile: File | null = null;
  oldImageUrl: string | null = null;

  constructor(
    public DbstdService: DbStudentService,
    public activateRoute: ActivatedRoute,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data => {
      this.DbstdService.getById(data['id']).subscribe(d => {
        this.updatestd = d;
        // Set the old image URL
        this.oldImageUrl != d.image;
      });
    });
  }

  save() {
    const formData = new FormData();
    formData.append('_id', this.updatestd._id.toString());
    formData.append('name', this.updatestd.name);
    formData.append('department', this.updatestd.department.toString());
    
    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }
    

    this.DbstdService.update(formData).subscribe(
      data => {
        this.router.navigateByUrl("/studentsdb");
      }
    );
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }
}
