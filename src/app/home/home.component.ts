import {Component, OnInit} from '@angular/core';
import {MyDataType, MyService} from '../services/app.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
})
export class HomeComponent implements OnInit {
  myObservableArray: Observable<MyDataType[]>;
  interviews: any[];

  constructor(private myService: MyService) {
    this.getData();
    this.getDataPodcast();

    this.interviews = [
      { id: '1', brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
      { id: '2', brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
      { id: '3', brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
      { id: '4', brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
      { id: '5', brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
      { id: '6', brand: 'Audi', year: 2011, color: 'Black', vin: 'gwregre345' },
      { id: '7', brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
      { id: '8', brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
      { id: '9', brand: 'VW', year: 2012, color: 'Orange', vin: 'dsad231ff' },
      {
        id: '10',
        brand: 'Audi',
        year: 2011,
        color: 'Black',
        vin: 'gwregre345',
      },
      { id: '11', brand: 'Renault', year: 2005, color: 'Gray', vin: 'h354htr' },
      { id: '12', brand: 'BMW', year: 2003, color: 'Blue', vin: 'j6w54qgh' },
    ];
  }

  getData() {
    if (!this.myObservableArray) {
      this.myObservableArray = this.myService.getData();
    }
  }

  getDataPodcast() {
    if (!this.myObservableArray) {
      this.myObservableArray = this.myService.getData();
    }
  }

  ngOnInit(): void {}
}
