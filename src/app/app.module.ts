import{ HttpClientModule } from "@angular/common/http" ;
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { AppComponent } from "./app.component";
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModel } from "./app.routing.model";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AccordionModule } from 'primeng/accordion';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { ChartModule } from 'primeng/chart';
import { LoginComponent } from './login/login.component';
import { LeaveReqComponent } from './leave-req/leave-req.component';
import { LeaveAppliedComponent } from './leave-applied/leave-applied.component';
import { MatNativeDateModule } from "@angular/material/core";
import { MatDialogModule } from "@angular/material/dialog";
import { DialogModule } from "@angular/cdk/dialog";
import { DialogueComponent } from "./dialogue/dialogue.component";
import {MatCardModule} from '@angular/material/card';
import {MatDialogActions, MatDialogClose, MatDialogContent, MatDialogTitle} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HttpServices } from "./shared/services/htttp-data-service";
import { UserDataService } from "./shared/services/User-data-service";
import {MatIconModule} from '@angular/material/icon';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { LeaveDataService } from "./shared/services/Leave-data.services";




@NgModule({
    declarations : [
        AppComponent,
        HomeComponent,
        HeaderComponent,
        LoginComponent,
        LeaveReqComponent,
        LeaveAppliedComponent,
        DialogueComponent    
    ],
    imports : [
        BrowserModule,
        HttpClientModule,
        NoopAnimationsModule,
        AppRoutingModel,
        FormsModule,
        ReactiveFormsModule,
        AccordionModule,
        BrowserAnimationsModule,
        ButtonModule,
        ChartModule,
        MatNativeDateModule,
        MatDialogModule,
        MatDialogModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatCardModule,
        DialogModule,
        MatInputModule,
        MatFormFieldModule,
        MatIconModule,
        MatSlideToggleModule,
        MatDatepickerModule,
        
      
     
    ],
    providers : [ 
        HttpServices,
        UserDataService,
        LeaveDataService,
        provideAnimationsAsync()
    ],
    bootstrap : [AppComponent],
})

export class AppModule{}