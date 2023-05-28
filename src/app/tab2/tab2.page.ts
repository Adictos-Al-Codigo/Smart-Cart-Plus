import { Component } from '@angular/core';
import { ApiItemService } from '../servicios/api-item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private apiItemService:ApiItemService, private router:Router) {}

  AddItem(data:any){
    this.apiItemService.addItem(data.value);
    this.router.navigate(['']);
    data.value = '';
  }

}
