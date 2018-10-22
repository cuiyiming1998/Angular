import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  userName:string = '5-崔一鸣';
  FansCount:number = 4;
  FollowCount:number = 5;

  UnsubmittedCount:number = 0;
  CompletedCount:number = 10;
  FinishedCount:number = 0;

}
