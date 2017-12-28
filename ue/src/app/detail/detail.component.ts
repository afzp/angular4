import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; //引入动态路由
import { Http } from '@angular/http';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  private productId:number; //声明一个接收参数的变量
  content:string;
  title:string;

  constructor(private router:ActivatedRoute,private http:Http) { }
  ngOnInit() {
      this.productId=this.router.snapshot.params['id'];//接收路由器传递过来的参数
      this.http.get(`assets/data/detail.json`,{params:{"id":this.productId}})
      .map(res=>res.json())
      .subscribe(data=>{
        if(data){
          this.title=data.title;
          this.content=data.content;
        }
      })
  }

}
