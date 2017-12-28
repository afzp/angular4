import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl,FormBuilder,FormGroup,Validators } from '@angular/forms'
import { mobileValidator,passValidator } from '../login/login.component';
import * as $ from 'jquery'; 
declare var layer: any;

export interface register{
  name:string,
  pass1:string,
  pass2:string
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:FormGroup;
  mikong:boolean;
  constructor(private fb: FormBuilder,private router: Router) {
   // user.hasError('required','password.pass1') && user.get('password.pass1').touched
   
   }

  ngOnInit() {
    this.user=this.fb.group({
      name:['',[Validators.required, mobileValidator]],                                       
      password:this.fb.group({
          pass1:['',[Validators.required,Validators.minLength(6),Validators.maxLength(12)]],
          pass2:['',[Validators.required]]
      },{validator:passValidator})
    });
    
  }
  onSubmit({value,valid}:{value:register,valid:boolean}){ 
    if(!this.user.valid){
       // alert("页面中有必填项为空或者值不合法");
       layer.open({
          content: '页面中有必填项为空或者值不合法'
          ,btn: '确定'
        });
        return false;
      }else{ 
        this.router.navigate(['/login']);
      }
  }
}
