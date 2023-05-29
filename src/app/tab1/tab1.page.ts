import { Component, OnInit } from '@angular/core';
import { ApiItemService } from '../servicios/api-item.service';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(public apiItemService:ApiItemService, private menuController:MenuController) {}

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

  removeAllItems(){
    this.apiItemService.removeAllItems();
    this.menuController.close();
  }

  onRenderItems($event:any){
    console.log($event);
    const item = this.apiItemService.items.splice($event.detail.from,1)[0];
    this.apiItemService.items.splice($event.detail.to,0,item);
    $event.detail.complete();
  }

}
