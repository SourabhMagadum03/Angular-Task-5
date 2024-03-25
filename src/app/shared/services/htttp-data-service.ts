import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/internal/operators/map";
import { LeaveDataService } from "./Leave-data.services";

@Injectable()

export class HttpServices{
    
    constructor(private http : HttpClient, private LeaveDataSer : LeaveDataService ){}
    userUrl = 'https://task-5-user-default-rtdb.firebaseio.com/userData.json'
    LeaveDataUrl = 'https://task-5-leavedata-default-rtdb.firebaseio.com/leaveData.json'
    postUserData(userData : any){
        this.http.post(this.userUrl, userData).subscribe({
            next : (param : any)=>{
                console.log(param);
            }
        })
    }

    getUserData(){
        return this.http.get(this.userUrl).pipe(map((resp : any)=>{
          const myStdArr = [];
          for(let stdId in resp){
            myStdArr.push({...resp[stdId]})
          }
          // console.log(myStdArr);
          return myStdArr
        }))
      }



      postLeaveData(LeaveData : any){
        this.http.post(this.LeaveDataUrl, LeaveData).subscribe({
            next : (param : any)=>{
                console.log(param);
             this.getLeaveData()

            }
        })
    }


    getLeaveData(){
     this.http.get(this.LeaveDataUrl).pipe(map((resp : any)=>{
        const myStdArr = [];
        for(let key in resp){
          myStdArr.push({...resp[key], id:key})
        }
        // console.log(myStdArr);
        return myStdArr
      })).subscribe((produc)=>{
        console.log(produc)
        this.LeaveDataSer.setProduct(produc)
      })
    }

    updateRecipe(id:string,data:any){
      this.http.patch('https://task-5-leavedata-default-rtdb.firebaseio.com/leaveData/' +id + '.json', data).subscribe((res)=>{
          console.log(res);
          this.getLeaveData()
      })
    }
}