import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {provideNativeDateAdapter} from '@angular/material/core';
import { LeaveDataService } from '../shared/services/Leave-data.services';
import { UserDataService } from '../shared/services/User-data-service';
import { LeaveArr } from '../shared/model/Satff-data.model';
import { HttpServices } from '../shared/services/htttp-data-service';


@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrl: './dialogue.component.scss'
})
export class DialogueComponent implements OnInit{
  @ViewChild ('MyForm') MyFormObj : any;
  submitted = false;
  useNamePass:any
  useNameP:any;
  days:any;
 
  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private LeaveDataSer: LeaveDataService, private UserDataServ : UserDataService, private httpServ : HttpServices){}
ngOnInit(){
    this.UserDataServ.getUserData()
}
createProduct(param:any){
  this.submitted = true;
  console.log(param.value)
  this.useNamePass = localStorage.getItem("setUserInfo")
    this.useNameP = JSON.parse(this.useNamePass)
   console.log(this.useNameP.userName)

    const UserDatils = this.UserDataServ.getSingleUserDataUsingUserName(this.useNameP.userName)
  console.log(UserDatils)
  
const time = param.value.endDate - param.value.startDate
this.days = time / (1000 * 3600 * 24)
console.log(this.days, typeof this.days)

  const leaveuser = new LeaveArr(this.useNameP.firstName+ " " + this.useNameP.lastName,this.useNameP.userdepartment,param.value.startDate,param.value.endDate,param.value.Reason,'Pedding', this.useNameP.firstName, this.days)
console.log(leaveuser)
this.httpServ.postLeaveData(leaveuser)


}


}
// {
//   "userName": "mahadev",
//   "userPassword": "123456789",
//   "userdepartment": "Production",
//   "firstName": "Sourabh",
//   "lastName": "Magadum"
// }


