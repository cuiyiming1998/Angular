import { Component, OnInit , Input , Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bottom',
  templateUrl: './bottom.component.html',
  styleUrls: ['./bottom.component.css']
})
export class BottomComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input() count;
  @Input() arr;
  @Output() delIndex = new EventEmitter();
  @Output() changeIndex = new EventEmitter();
  del(i) {
    this.delIndex.emit(i);
  }
  change(i) {
    this.arr[i].done = !this.arr[i].done;
    this.changeIndex.emit(i);
  }
}
