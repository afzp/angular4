import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Http} from '@angular/http';


@Component({
  selector: 'app-detail-header',
  templateUrl: './detail-header.component.html',
  styleUrls: ['./detail-header.component.css']
})
export class DetailHeaderComponent implements OnInit {
  private productId:number;
  name:string;
  img_src:string;
  
  constructor(private router:ActivatedRoute,private http: Http) { }

  ngOnInit() {
    this.productId=this.router.snapshot.params['id'];
    
    this.http.get(`assets/data/user.json`,{params:{"id":this.productId}}) 
        .map(res => res.json()) 
        .subscribe(data => {
           if (data) {
             this.name=data.name;
             this.img_src=data.img_src;   
           }else{

           }
        });
  }

}
