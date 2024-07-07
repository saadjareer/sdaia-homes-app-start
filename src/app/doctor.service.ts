import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  constructor(private http: HttpClient) { }

  getAllDoctors(): Observable<any[]> {


    return this
          .http
          .get<any[]>
          ("http://stc-sjareer.mshome.net:9090/HrApiDay11/api/departments");
  }

}
