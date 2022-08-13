import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-emp',
  templateUrl: './add-edit-emp.component.html',
  styleUrls: ['./add-edit-emp.component.scss']
})
export class AddEditEmpComponent implements OnInit {

  @Input() emp: any;
  EmployeeName: string = "";
  Department: string = "";
  DateOfJoining: string = "";
  PhotoFileName: string = "";
  EmployeeId: number = 0;
  PhotoFilePath: string = "";

  DepartmentsList: any = [];

  constructor(private service: SharedService) { }

  ngOnInit(): void {


    this.loadDepartmentList();
  }

  loadDepartmentList() {
    this.service.getAllByDepartmentNames().subscribe((data: any) => {
      console.log(data);
      this.DepartmentsList = data;

      this.EmployeeId = this.emp.EmployeeId;
      this.EmployeeName = this.emp.EmployeeName;
      this.DateOfJoining = this.emp.DateOfJoining;
      this.PhotoFileName = this.emp.PhotoFileName;
      this.PhotoFilePath = this.service.urlPhoto + this.PhotoFileName;
      console.log(this.PhotoFilePath);
    });
  }

  addEmployee() {

    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName,

    }
    console.log(val)
    this.service.addEmployee(val).subscribe(result => {
      console.log(result);
      alert(result.toString());
    });
  }

  updateEmployee() {
    var val = {
      EmployeeId: this.EmployeeId,
      EmployeeName: this.EmployeeName,
      Department: this.Department,
      DateOfJoining: this.DateOfJoining,
      PhotoFileName: this.PhotoFileName

    }
    console.log(val)

    this.service.updateEmployee(val).subscribe(result => {
      alert(result.toString());
    });
  }


  uploadPhoto(event: any) {
    var file = event.target.files[0];
    const formData: FormData = new FormData();
    formData.append('uploadedFile', file, file.name);

    this.service.uploadPhoto(formData).subscribe((data: any) => {
      console.log(data);
      this.PhotoFileName = data.toString();
      this.PhotoFilePath = this.service.urlPhoto + this.PhotoFileName;
    });
  }


}
