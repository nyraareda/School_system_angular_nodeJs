import { Component } from '@angular/core';
import { DbStudentService } from '../../_services/db-student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { DbStudent } from '../../_models/db-student';

@Component({
  selector: 'app-delete-student',
  standalone: true,
  imports: [],
  templateUrl: './delete-student.component.html',
  styleUrl: './delete-student.component.css'
})
export class DeleteStudentComponent {
  constructor(public DbstdService:DbStudentService,public activateRoute:ActivatedRoute,public router:Router){}
  delStd:DbStudent = new DbStudent (0 , '' , 0,'');
  ngOnInit(): void {
    this.activateRoute.params.subscribe(params=>{
      this.DbstdService.getById(params['id']).subscribe(std=>{
        this.delStd = std;
      });
    });
  }
  delete(id:number){
    this.DbstdService.delete(id).subscribe(std=>{
      this.router.navigateByUrl('/studentsdb')
    })
  }
  ngOnDestroy(): void {
      
  }
}
