import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class MyService {
  mydata: MyDataType[] = [
    { id: 1, value: "Rossi" },
    { id: 2, value: "Blue" },
    { id: 3, value: "value_3" },
    { id: 4, value: "Rossi" },
    { id: 5, value: "Blue" },
    { id: 6, value: "value_3" },
    { id: 7, value: "Rossi" },
    { id: 8, value: "Blue" },
    { id: 9, value: "value_3" },
    { id: 10, value: "Rossi" },
    { id: 11, value: "Blue" },
    { id: 12, value: "value_3" },
  ];

  podcasts: Podcasts[] = [
    { id: 1, value: "Rossi" },
    { id: 2, value: "Blue" },
    { id: 3, value: "value_3" },
    { id: 4, value: "Rossi" },
    { id: 5, value: "Blue" },
    { id: 6, value: "value_3" },
    { id: 7, value: "Rossi" },
    { id: 8, value: "Blue" },
    { id: 9, value: "value_3" },
    { id: 10, value: "Rossi" },
    { id: 11, value: "Blue" },
    { id: 12, value: "value_3" },
  ];

  constructor() {}

  getData(): Observable<MyDataType[]> {
    let data = new Observable<MyDataType[]>((observer) => {
      setTimeout(() => {
        observer.next(this.mydata);
      });
    });
    return data;
  }

  getDatapodcast(): Observable<Podcasts[]> {
    let data = new Observable<Podcasts[]>((observer) => {
      setTimeout(() => {
        observer.next(this.mydata);
      });
    });
    return data;
  }
}

export class MyDataType {
  public id: number;
  public value: string;
}

export class Podcasts {
  public id: number;
  public value: string;
}
