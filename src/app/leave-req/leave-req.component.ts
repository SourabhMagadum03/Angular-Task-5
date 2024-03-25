import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../shared/services/User-data-service';
import { HttpServices } from '../shared/services/htttp-data-service';
import { LeaveDataService } from '../shared/services/Leave-data.services';


@Component({
  selector: 'app-leave-req',
  templateUrl: './leave-req.component.html',
  styleUrl: './leave-req.component.scss'
})
export class LeaveReqComponent implements OnInit{
constructor(private UserDataServ: UserDataService, private HttpServ: HttpServices, private LeaveDataSer : LeaveDataService){}
allUserArr: any[]=[];
allLeaveDataArr:any[]=[];
pendingLeav:any[]=[];
otherLeave:any[]=[];
useNamePass:any;
useNameP:any;
ngOnInit(): void {

  this.useNamePass = localStorage.getItem("setUserInfo")
  this.useNameP = JSON.parse(this.useNamePass)
 console.log(this.useNameP)

this.HttpServ.getLeaveData()
this.LeaveDataSer.productArrayBehaviourSubject.subscribe({
  next : (param : any)=> {
    this.allLeaveDataArr = (param.filter((rec:any)=>{return rec.Department === this.useNameP.userdepartment}))
  
    this.otherLeave = [];
    this.pendingLeav = [];
    this.allLeaveDataArr.forEach((vel) =>{
      console.log(vel)
      if(vel.Status === 'Pedding'){
          +this.pendingLeav.push(vel)
      }else{
       +this.otherLeave.push(vel)
      }
    })
  }
})
}

OnApprove(data:any){
this.HttpServ.updateRecipe(data, {Status : 'Approved'})
}
OnReject(data:any){
this.HttpServ.updateRecipe(data, {Status : 'Rejected'})

}
}
