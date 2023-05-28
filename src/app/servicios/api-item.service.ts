import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiItemService {

  private _items!: string[];
  private _isEmpty!: boolean;


  constructor() {
    this._items = [];
    this._isEmpty = true;
   }

  public get items(): string[] {
    return this._items;
  }
  public set items(value: string[]) {
    this._items = value;
  }

  public get isEmpty(): boolean {
    return this._isEmpty;
  }

  public set isEmpty(value: boolean) {
    this._isEmpty = value;
  }

  indexItem(){
    return this._items;
  }

  addItem(data:string){
    this._items.push(data);
    this._isEmpty = false;
  }

  removeItem(item:string){
    let index = this._items.findIndex( it => it == item);
    this._items.splice(index, 1);

    if (this._items.length === 0) {
      this._isEmpty = true;
    }
  }

  removeAllItems(){
    this._items = [];
    this._isEmpty = true;
  }

  existItem(item:string){
    const itemFound = this._items.find(it => it.toLowerCase().trim() === item.toLocaleLowerCase().trim());
    if (itemFound) {
      return true;
    }else{
      return false;
    }
  }
}
