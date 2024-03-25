export class LeaveArr{
        UserFullName : string;
        Department:string;
        LeaveStart : string;
        LeaveEnd : string;
        Reason : string;
        Status : string;
        firstName : string;
        Days : number;

       

        constructor(UsFn : string, Dep : string, LeSa : string, LeEn : string, Re : string, st :string, Fn : string, Day : number){
            this.UserFullName = UsFn;
            this.Department = Dep;
            this.LeaveStart = LeSa;
            this.LeaveEnd = LeEn;
            this.Reason = Re;
            this.Status = st;
            this.firstName = Fn;
            this.Days = Day;
        }
}