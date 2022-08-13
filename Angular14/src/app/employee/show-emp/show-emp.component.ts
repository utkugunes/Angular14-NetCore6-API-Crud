import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.scss']
})
export class ShowEmpComponent implements OnInit {

  constructor(private service:SharedService) { }

  EmployeeList:any=[];
  emp:any;
  ModalTitle:string="";
  ActiveAddEditEmpComponent:boolean=false;

  ngOnInit(): void {
    this.refreshEmpList();
  }



  refreshEmpList(){
    this.service.getEmpList().subscribe(data=>{
      this.EmployeeList=data;
    });
  }


  addClick(){
    this.emp={
      EmployeeId:0,
      EmployeeName:"",
      Department:"",
      DateOfJoining:"",
      PhotoFileName:"anonymous.png"
    }
    this.ModalTitle="Add Employee"
    this.ActiveAddEditEmpComponent=true;

  }

  closeClick(){ 
    this.ActiveAddEditEmpComponent=false; 
    this.refreshEmpList();
  }
  editClick(item:any){
    this.ModalTitle="Edit Employee"
    this.emp=item;
    this.ActiveAddEditEmpComponent=true;
    console.log(this.emp);
  }

  deleteClick(item:number){
    if(confirm("Are you sure ?"))
    this.service.delEmployee(item).subscribe(result=>{
      this.refreshEmpList();
    });

   
  }   

}
