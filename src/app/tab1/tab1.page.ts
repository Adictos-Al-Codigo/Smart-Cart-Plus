import { Component, OnInit } from '@angular/core';
import { ApiItemService } from '../servicios/api-item.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public apiItemService:ApiItemService) {}

  Lista_items:any;

  GetAllItem(){
    this.Lista_items = this.apiItemService.indexItem();
  }

  ngOnInit(): void {
    this.GetAllItem();
  }

  removeItem(item:string){
    this.apiItemService.removeItem(item);
  }

}
