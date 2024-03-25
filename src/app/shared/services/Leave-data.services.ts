import { Injectable, OnInit } from "@angular/core";
import { LeaveArr } from "../model/Satff-data.model";
import { UserDataService } from "./User-data-service";
import { HttpServices } from "./htttp-data-service";
import { BehaviorSubject } from "rxjs";

@Injectable()

export class LeaveDataService implements OnInit{
    allLeaveDataArr:any[]=[];
    constructor(){}
ngOnInit(): void {
  
}

productArrayBehaviourSubject = new BehaviorSubject(this.allLeaveDataArr.slice());

setProduct(product :any){
    console.log(product)
      this.allLeaveDataArr = product;
      this.productArrayBehaviourSubject.next(product.slice())
    }

}

