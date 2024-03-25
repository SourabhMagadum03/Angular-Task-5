import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogueComponent } from '../dialogue/dialogue.component';
import { UserDataService } from '../shared/services/User-data-service';
import { HttpServices } from '../shared/services/htttp-data-service';
import { LeaveDataService } from '../shared/services/Leave-data.services';

@Component({
  selector: 'app-leave-applied',
  templateUrl: './leave-applied.component.html',
  styleUrl: './leave-applied.component.scss'
})
export class LeaveAppliedComponent implements OnInit {
  allLeaveDataArr:any[]=[];
  allLeaveDay:number = 20;
  ApproveDay:number = 0;
   RejectDay:number = 0;

  useNamePass:any;
  useNameP:any;
  constructor(public dialog: MatDialog, private UserDataServ: UserDataService, private HttpSer: HttpServices, private LeaveDataSer : LeaveDataService) {}
  ngOnInit(): void {
   
  this.HttpSer.getLeaveData()
   this.useNamePass = localStorage.getItem("setUserInfo")
   this.useNameP = JSON.parse(this.useNamePass)
  console.log(this.useNameP)

this.LeaveDataSer.productArrayBehaviourSubject.subscribe({
  next : (param : any)=> {
    this.allLeaveDataArr = (param.filter((rec:any)=>{return rec.firstName === this.useNameP.firstName}))
    this.allLeaveDay = 20;
    this.ApproveDay = 0;
    this.RejectDay = 0;
    this.allLeaveDataArr.forEach((vel) =>{
      console.log(vel)
      if(vel.Status === 'Approved'){
        this.allLeaveDay +=  - vel.Days
        this.ApproveDay += vel.Days
      }if(vel.Status === 'Rejected'){
        this.RejectDay += vel.Days
      }
    })
  }
});

// for(let vel of this.allLeaveDataArr){
//   console.log(vel)
//   if(vel.Status === 'Approved'){
//     this.allLeaveDay +=  - vel.Days
//     this.ApproveDay += vel.Days
//   }if(vel.Status === 'Rejected'){
//     this.RejectDay += vel.Days
//   }
// }
  }
openDialog() {
    const dialogRef =  this.dialog.open(DialogueComponent, {
       width : '400px',
       data: {
        
       },
     });
     dialogRef.afterClosed().subscribe({
       next : result => {
         console.log(`Dialog result: ${result}`);
       }
     });
   }
}
