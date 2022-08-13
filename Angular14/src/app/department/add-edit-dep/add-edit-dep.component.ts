import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-dep',
  templateUrl: './add-edit-dep.component.html',
  styleUrls: ['./add-edit-dep.component.scss']
})
export class AddEditDepComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;      // [dep] = "dep"   [dep]
  DepartmentId:number=0;
  DepartmentName:string="";

  ngOnInit(): void {
      this.DepartmentId = this.dep.DepartmentId;  // ?
     this.DepartmentName=this.dep.DepartmentName;
    // console.log(this.dep.DepartmentId)
    //  console.log(this.dep.DepartmentName)


  }

  addDepartment(){

    var val={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName, 

    }
    
    console.log(val)
    this.service.addDepartment(val).subscribe(result=>{
    
        alert(result.toString());

    });
  }

  updateDepartment(){
    var val={
      DepartmentId:this.DepartmentId,
      DepartmentName:this.DepartmentName,
      
    }

    this.service.updateDepartment(val).subscribe(result=>{
    
        alert(result.toString());

    });
  }

  
 

}
