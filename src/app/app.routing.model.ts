import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { LoginComponent } from "./login/login.component";
import { LeaveReqComponent } from "./leave-req/leave-req.component";
import { LeaveAppliedComponent } from "./leave-applied/leave-applied.component";


const routes : Routes = [
   {path : '', component : HomeComponent},
    {path : 'Registration', component : HomeComponent},
    {path : 'login',component : LoginComponent},
    {path: 'Hod',component :LeaveReqComponent},
    {path:'Staff',component:LeaveAppliedComponent},
   // {path : '**', redirectTo : '/not-found'} //wildcard route
]


@NgModule({
   imports : [
    RouterModule.forRoot(routes)
   ],
   exports : [
    RouterModule
   ] 
})

export class AppRoutingModel{}