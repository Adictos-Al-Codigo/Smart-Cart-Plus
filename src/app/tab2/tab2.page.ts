import { Component } from '@angular/core';
import { ApiItemService } from '../servicios/api-item.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  isAlertOpen = false;
  isAlertOpen2 = false;
  public alertButtons = ['Aceptar'];

  constructor(private apiItemService:ApiItemService, private router:Router) {}

  AddItem(data:any){
    if (data.value && data.value != '') {
      if (!this.apiItemService.existItem(data.value)) {
        this.apiItemService.addItem(data.value);
        data.value = '';
        this.router.navigate(['']);
      }else{
        this.setOpen2(true);
      }
    }else{
      this.setOpen(true);
    }
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

  setOpen2(isOpen: boolean){
    this.isAlertOpen2 = isOpen;
  }
}
