import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.scss']
})
export class ShowDepComponent implements OnInit {

constructor(private service:SharedService) { }

 DepartmentList:any=[];
 ActiveAddEditDepComponent:boolean=false;
 ModalTitle:(string |number)="";
 dep:any;
 
 ngOnInit(): void {
  this.refreshDepList();
   
}



refreshDepList(){
  this.service.getDepList().subscribe(data=>{
    this.DepartmentList=data;

   // console.log( this.DepartmentList); //(3) object
    
  });
}

addClick(){
this.dep={
    DepartmentId:0,
    DepartmentName:"",

  }

  //console.log(this.dep.DepartmentId)

  this.ModalTitle="Add Department";
  this.ActiveAddEditDepComponent=true;
}

  closeClick(){ 
    this.ActiveAddEditDepComponent=false; 
    this.refreshDepList();
  }

  editClick(item: any){
    this.dep=item;
    this.ActiveAddEditDepComponent=true;
   
  //  console.log(this.dep.DepartmentId,this.dep.DepartmentName) 
  //  console.log(typeof(this.dep)) //obje
  
    this.ModalTitle="Edit "+this.dep.DepartmentId +". Department";
    
  }

  deleteClick(item:any){
    
    this.service.delDepartment(item).subscribe(result=>{
      this.refreshDepList();
    });
  }

}
