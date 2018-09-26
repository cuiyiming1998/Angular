import { Component, OnInit } from '@angular/core';
import { Service1Service } from "../../services/service1.service";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  constructor(private local: Service1Service) {}
  ngOnInit() {
    if (this.local.get("list")) {
      this.data = JSON.parse(this.local.get("list"));
      this.count();
    } else {
      this.data = [];
    }
  }

  counter: number = 0;
  data = [];

  gettxt(msg) {
    this.data.push(msg);
    this.count();
    JSON.stringify(this.data);
    this.local.set("list", JSON.stringify(this.data));
  }
  count() {
    this.counter = 0;
    this.data.forEach((value, index) => {
      if (value.done) {
        this.counter++;
      }
    });
  }
  add1(i: number) {
    this.count();
    this.local.set("list", JSON.stringify(this.data));
  }
  del(i) {
    this.data.splice(i, 1);
    this.count();
    this.local.set("list", JSON.stringify(this.data));
  }
}
export class Msg{
  constructor(public title: string,public done:boolean){}
}
