import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter } from 'rxjs';
import { OrderDetailsService } from 'src/app/service/order-details.service';
 

@Component({
  selector: 'app-menupages',
  templateUrl: './menupages.component.html',
  styleUrls: ['./menupages.component.css']
})
export class MenupagesComponent implements OnInit {
  constructor(private param:ActivatedRoute,private service:OrderDetailsService){}
  menuData:any;
getMenuId:any;
  ngOnInit(): void {
    this.getMenuId=this.param.snapshot.paramMap.get('id')
    console.log(this.getMenuId,'getmenu');
    if(this.getMenuId)
      {
      this.menuData=this.service.foodDetails.filter((value)=>{
       return value.id=this.getMenuId
        
      });
      console.log(this.getMenuId,'menudata>>');
      
    }
    
    
  }
}
