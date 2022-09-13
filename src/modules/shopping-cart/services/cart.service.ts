import { Injectable } from '@angular/core';
import { HttpService } from 'src/modules/app-common/services/http.service';
import { Cart } from '../models/cart';
import { CartItemGroup } from '../models/cart-item-group';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpService) { }

  currentCart = new Cart([])
  setCurrentCart(currentCart: Cart){
    console.log("before",this.currentCart)
    this.currentCart = currentCart;
    console.log("after",this.currentCart)

  }

  getCurrentCart(){
    return this.currentCart;
  }

  getCount(){
    return this.currentCount;
  }

  currentCount = 0
  updateCurrentCart(currentCart: Cart){
    this.setCurrentCart(currentCart)
    this.currentCount = this.getCurrentCart().getTotalCount();
  }


  async getCart(){
    console.log("getcart")
    let cart : any = await this.http.get("/assets/shopping_cart_items.json").toPromise();
    console.log("cart returned", cart)
    let groupItems = cart?.["shopping_cart_items"].map((group:any)=>new CartItemGroup(group))
    return new Cart(groupItems);
  }

}
