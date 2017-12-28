import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';
import * as $ from 'jquery';
//author fzp

interface list{
  title:string;
  author:string;
  url:string;
  img_url:string;
  count:string;
  class:string; 
  id:string
}
interface nav{
  title:string;
  id:string;
  active:string;
  subnavs:any;
}
interface recommend{
  title:string;
  id:string;
  active:string;
}



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  lists: list[];
  items: list[];
  navs: nav[]; 
  recommends:recommend[];
  owners:recommend[];
  str1:string;
  str2:string;
  str3:string;
  tishi:boolean;
  
  constructor(private http: Http) {
    
    this.tishi=false;
    
  }
  

  ngOnInit() {
    this.http.get(`assets/data/list.json`) 
        .map(res => res.json()) 
        .subscribe(data => {
           if (data) {
             this.lists = data; 
             this.items = data; 
           }else{
             this.tishi=true;
           }
        });
    this.http.get(`assets/data/nav.json`) 
        .map(res => res.json()) 
        .subscribe(data => {
           if (data) {
              this.navs = data;
              for(let item of data){
                if(item.active){
                    this.str1=item.title;
                }
              }
           } 
        });
  this.http.get(`assets/data/recommend.json`) 
        .map(res => res.json()) 
        .subscribe(data => {
           if (data) {
              this.recommends = data;
              for(let item of data){
                if(item.active){
                    this.str2=item.title;
                }
              }
           } 
        });
    this.http.get(`assets/data/owner.json`) 
        .map(res => res.json()) 
        .subscribe(data => {
           if (data) {
              this.owners = data;
              for(let item of data){
                if(item.active){
                    this.str3=item.title;
                }
              }
           } 
        });
  }
  open(str){
    $("."+str+"").toggleClass("open");
  }
  close(str){
    $("."+str+"").removeClass("open");
  }
  link(str,val,cl,ind){
    str.replace(/\//g, '\\/');  
      for( let item of this.navs){
          if(item.id!=val){
            delete item.active;

            for(let it of item.subnavs){
              if(it.id!=val){
                delete it.active;
              }else{
                 it.active = "1";
                 this.str1=it.title;
              }
            }

          }else{
            item.active = "1";
            this.str1=item.title;
          }
      }
      if(val==0){
         this.lists =this.items;
      }else{
          this.lists =this.items;
          this.lists =this.lists.filter(function(item){
              if(item.id!=undefined){
                if(item.id.indexOf(val)!=-1){
                  return   item.id;
                }
              }
          })
         if(!this.lists.length){
            this.tishi=true;
         }else{
           this.tishi=false;
         }
      }
    this.close(cl);
  }
}

