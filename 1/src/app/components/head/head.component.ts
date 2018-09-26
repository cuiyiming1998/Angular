import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: "app-head",
  templateUrl: "./head.component.html",
  styleUrls: ["./head.component.css"]
})
export class HeadComponent implements OnInit {

  constructor() {}

  ngOnInit() {}
  txt: string;
  @Output() eventchild1 = new EventEmitter();

  fun(e) {
    if (e.keyCode == 13) {
      this.eventchild1.emit(new Msg(this.txt, false));
      this.txt = "";
    }
  };
}
export class Msg {
  constructor(public title: string, public done: boolean) {

  }

}

