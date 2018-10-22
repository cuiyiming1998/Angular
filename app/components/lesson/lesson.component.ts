import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router} from "@angular/router"
import {HttpClient} from "@angular/common/http"

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css']
})
export class LessonComponent implements OnInit {

  constructor(private router:ActivatedRoute,
              private route:Router,
              private http:HttpClient
  ) { }
  lesson;
  lessonID:number;
  ngOnInit() {
    // this.lessonID = this.router.snapshot.params["lessonID"];
    this.router.params.subscribe(params =>{
      this.lessonID = params["lessonID"];
    })
    this.http.get('/api/lesson').subscribe((data)=>{
      this.lesson=data;
    })
  }

}
