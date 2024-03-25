import { Injectable, OnInit } from "@angular/core";
import { HttpServices } from "./htttp-data-service";
import { LeaveArr } from "../model/Satff-data.model";

@Injectable()

export class UserDataService implements OnInit{
    constructor(private HttpServ:HttpServices){}
// UserData:any[]= [];
allUserArr: any[]=[];
singluser:any[]=[]
NewRegsUs:any[]=[];
leaveData:any
ngOnInit(): void {
    this.getUserData()
    console.log(this.singluser)
}
 

getUserData(){
    this.HttpServ.getUserData().subscribe({
      next : (param : any)=>{
        this.allUserArr = param;
      }
    })
    console.log(this.allUserArr)
  }

  getSingleUserDataUsingUserName(UserName:any){
    return this.allUserArr.slice().find((rec)=>{return rec.userName === UserName});
  
  }
}