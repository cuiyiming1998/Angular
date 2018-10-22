import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router'
import { HttpClient} from '@angular/common/http'

@Component({
  selector: 'app-lessondetail',
  templateUrl: './lessondetail.component.html',
  styleUrls: ['./lessondetail.component.css']
})
export class LessondetailComponent implements OnInit {

  constructor(
    private http:HttpClient,
    private router:ActivatedRoute
  ) { }
  lessonId:number;
  lesson;
  taskId:number;
  task;
  ngOnInit() {
    this.lessonId = this.router.snapshot.params['lessonId'];

    this.http.get('/api/lesson/'+this.lessonId).subscribe((data)=>{
      this.lesson = data;
    })

    this.taskId = this.router.snapshot.params['taskId'];

    this.http.get('/api/task').subscribe((data)=>{
      this.task = data;
    })
  }

}
class lesson{
  constructor(
      public id:number,
      public courseName:string,
      public images:string,
      public task:number,
      public person:number
      ){}
}

