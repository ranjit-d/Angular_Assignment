import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { Empojb } from './employee.model';

@Component({
  selector: 'app-employee-data',
  templateUrl: './employee-data.component.html',
  styleUrls: ['./employee-data.component.scss']
})
export class EmployeeDataComponent  implements OnInit{
  employeedetail:any;
  employeeform!:FormGroup;
employeeobj:Empojb=new Empojb();

  constructor(private fb:FormBuilder,private api:ApiService){}
ngOnInit(): void {
  this.employeeform=this.fb.group({
    name:[''],
    email:[''],
    department:[''],
    position:[''],
    joiningdate:[''],

  })
  this.AllgetEmployee()
}

onpost(){
  this.employeeobj.name=this.employeeform.value.name;
  this.employeeobj.email=this.employeeform.value.email;
  this.employeeobj.department=this.employeeform.value.department;
  this.employeeobj.position=this.employeeform.value.position;
  this.employeeobj.joiningdate=this.employeeform.value.joiningdate;

  this.api.OnPostCall(this.employeeobj).subscribe((res)=>{
    console.log(res);
    alert("employee added successfully");
    let ref=document.getElementById('cancel');
    ref?.click();
    this.employeeform.reset();
    this.AllgetEmployee();
  },err=>{
    alert("Something Went Wrong")
  })


}
AllgetEmployee(){
  this.api.OnGetCall().subscribe(res=>{
this.employeedetail=res;
  })
}
deletedata(row:any){
  this.api.OnDeleteCall(row.id).subscribe((res)=>{
    console.log(res)
    alert("employee deleted Successfully");
    this.AllgetEmployee()
  })
}

onedit(row:any){
  this.employeeobj.id=row.id
this.employeeform.controls['name'].setValue(row.name);
this.employeeform.controls['email'].setValue(row.email);
this.employeeform.controls['department'].setValue(row.department);
this.employeeform.controls['position'].setValue(row.position);
this.employeeform.controls['joiningdate'].setValue(row.joiningdate);

}
Onupdate(){
  this.employeeobj.name=this.employeeform.value.name;
  this.employeeobj.email=this.employeeform.value.email;
  this.employeeobj.department=this.employeeform.value.department;
  this.employeeobj.position=this.employeeform.value.position;
  this.employeeobj.joiningdate=this.employeeform.value.joiningdate;

  this.api.OnUpdateCall(this.employeeobj,this.employeeobj.id).subscribe((res)=>{
    alert("Update Successfully");
    let ref=document.getElementById('cancel');
    ref?.click();
    this.employeeform.reset();
    this.AllgetEmployee();
  })
}

}
