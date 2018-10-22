import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-coursedatail',
  templateUrl: './coursedatail.component.html',
  styleUrls: ['./coursedatail.component.css']
})
export class CoursedatailComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:ActivatedRoute
  ) { }
  course;
  courseId:number;
  ngOnInit() {
    this.courseId = this.router.snapshot.params['courseId'];

    this.http.get('/api/course/'+this.courseId).subscribe((data)=>{
      this.course = data;
    })
  }

}
