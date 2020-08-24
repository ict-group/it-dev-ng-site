import {Component, OnInit} from '@angular/core';
import {MyDataType, MyService} from '../services/app.service';
import {Observable} from 'rxjs';

@Component({
  selector: "app-developers",
  templateUrl: "./developers.component.html",
  styleUrls: ["./developers.component.less"],
})
export class DevelopersComponent implements OnInit {
  myObservableArray: Observable<MyDataType[]>;

  constructor(private myService: MyService) {
    this.getData();
  }

  getData() {
    if (!this.myObservableArray) {
      this.myObservableArray = this.myService.getData();
    }
  }

  ngOnInit(): void {}
}
