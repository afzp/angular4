import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule, FormGroup, FormBuilder, Validators, FormControl,ReactiveFormsModule  } from '@angular/forms';
import { Routes,RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { ListComponent } from './list/list.component';
import * as $ from 'jquery';
import { NotfindComponent } from './notfind/notfind.component';
import { DetailComponent } from './detail/detail.component';
import { DetailHeaderComponent } from './detail-header/detail-header.component';
import { RegisterComponent } from './register/register.component';
import { FormComponent } from './form/form.component';


export const ROUTES: Routes=[
  {path:'',component:IndexComponent},
  {path:'login',component:LoginComponent},  //path 不能以斜杠开头
  {path:'register',component:RegisterComponent}, 
  {path:'form',component:FormComponent}, 
  {path:'listdetail/:id',component:DetailComponent},
  {path:'**',component:NotfindComponent} //**是通配符当上面的所有路径都不复合或者是无效路径的时候都回跳转到这个页面。
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailComponent,
    DetailHeaderComponent,
    RegisterComponent,
    FormComponent,
    IndexComponent,
    LoginComponent,
    ListComponent,
    NotfindComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
