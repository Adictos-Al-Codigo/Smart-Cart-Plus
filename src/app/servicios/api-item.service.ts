import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiItemService {

  private _items!: string[];
  private _isEmpty!: boolean;


  constructor() {
    this._items = ["Arina","Aceite","Tomáte"];
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
}
