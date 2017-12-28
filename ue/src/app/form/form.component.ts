import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
declare var $: any; 
declare var layer: any;
declare var verify: any;

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private router:Router) {
   }

  ngOnInit() {
     $("input.text").blur(function(){
          verify.verifyfield($(this));
      }).focus(function(){
          verify.removeTips($(this));
      });
  }
  onSubmit(){
    var flag=true;
    $("#biaodan .text").each(function(){
        if(!verify.verifyfield($(this))){
          flag=false;
        };
     });
     if(!flag){
        layer.open({
          content: '页面中有必填项为空或不合法'
          ,btn: '确定'
        });
     }else{
        this.router.navigate(['/login']);
     }
     return flag;
  }
}
