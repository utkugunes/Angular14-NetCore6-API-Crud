import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SharedService {


readonly urlAPI= "http://localhost:49993/api";
readonly urlPhoto = "http://localhost:49993/photos/";


  constructor(private http:HttpClient) {}

    getDepList():Observable<any[]>{
      return this.http.get<any>(this.urlAPI +'/department');
    }

    addDepartment(val:any){
      return this.http.post(this.urlAPI +'/department',val);
    }

    updateDepartment(val:any){
      return this.http.put(this.urlAPI +'/department',val);
    }

    delDepartment(val:any){
      return this.http.delete(this.urlAPI +'/department/'+val);
    }


    getEmpList():Observable<any[]>{
      return this.http.get<any>(this.urlAPI +'/Employee');
    }

    addEmployee(val:any){
      return this.http.post(this.urlAPI +'/Employee',val);
    }

    updateEmployee(val:any){
      return this.http.put(this.urlAPI +'/Employee',val);
    }

    delEmployee(val:any){
      return this.http.delete(this.urlAPI +'/Employee/'+val);
    }


    uploadPhoto(val:any){
      return this.http.post(this.urlAPI+ '/Employee/SaveFile',val);


    }

     getAllByDepartmentNames():Observable<any[]>{

      return this.http.get<any>(this.urlAPI+'/Employee/GetAllDepartmentNames' );


     } 



   
}
