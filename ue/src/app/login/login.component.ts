//author fzp
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder,FormGroup,FormControl,Validators } from '@angular/forms';
import * as $ from 'jquery';

export interface User {
  name: string;
  password:string;
}

//自定义一个手机号码的校验
export function mobileValidator(control: FormControl): any {
  const val=control.value;
  const mobieReg=/^1[3|4|5|8][0-9]\d{4,8}$/;
  const result = mobieReg.test(val);
  return result?null:{mobile:{info:'手机号码格式不正确'}}
  
}
//自定义一个密码组的校验
export function passValidator(controlGroup,FormGroup):any{
  const pass1=controlGroup.get("pass1").value as FormGroup;
  const pass2=controlGroup.get("pass2").value as FormGroup;
  const isEqual:boolean=(pass1===pass2);
  return isEqual?null:{passValidator:{info:'两次输入的密码不一致'}}

}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName = "";
 
  user:FormGroup;
  constructor(private fb:FormBuilder,private router: Router,){}

  ngOnInit() {
    //正常写法
    /*
    this.user=new FormGroup({
        name:new FormControl('',[Validators.required]),
        password:new FormControl('',Validators.required)
    })
    */
    //引入FormBuilder的写法
    this.user=this.fb.group({
      name:['',[Validators.required,mobileValidator]],
      password:['',[Validators.required]]
    })
  }
  onSubmit({value,valid}:{value:User,valid:boolean}){
     this.router.navigate(['/']);
  }
}

