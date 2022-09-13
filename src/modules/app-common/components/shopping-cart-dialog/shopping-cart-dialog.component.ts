import { Component, Inject, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cart } from 'src/modules/shopping-cart/models/cart';
import { CartItemGroup } from 'src/modules/shopping-cart/models/cart-item-group';
import { Item } from 'src/modules/shopping-cart/models/item';
import { CartService } from 'src/modules/shopping-cart/services/cart.service';

const CURRENCY = environment.CURRENCY;
@Component({
  selector: 'app-shopping-cart-dialog',
  templateUrl: './shopping-cart-dialog.component.html',
  styleUrls: ['./shopping-cart-dialog.component.css']
})
export class ShoppingCartDialogComponent implements OnInit,OnChanges {

  constructor(public dialogRef: MatDialogRef<ShoppingCartDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any
  ,private cartService: CartService) {}


  ngOnInit(): void {
    
    this.initCart();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes.currentShoppingCart.currentValue){
      console.log("changes",changes.currentShoppingCart.currentValue)
      this.cartService.setCurrentCart(changes.currentShoppingCart.currentValue)
    }
  }
  items: Item[] = []
  CURRENCY =CURRENCY

  currentShoppingCart = new Cart([])
  async initCart(){

    this.currentShoppingCart = await this.cartService.getCart()
  }
  


  checkout(){
    this.currentShoppingCart.checkoutCart();
    this.cartService.setCurrentCart(this.currentShoppingCart)
    this.send()

    this.dialogRef.close()
    alert('The transaction was finished successfully!');
    
  }

  order: any = null

  addQuantity(item: any){
    item.addQuantity();
    this.currentShoppingCart.updateCartItems(item);
    this.cartService.updateCurrentCart(this.currentShoppingCart)
    this.send()

  }

  reduceQuantity(item: any){
    item.reduceQuantity();
    this.currentShoppingCart.updateCartItems(item);
    this.cartService.updateCurrentCart(this.currentShoppingCart)
    this.send()

  }

  removeItemGroup(itemGroup: CartItemGroup){
    this.currentShoppingCart.removeItemGroup(itemGroup);
    this.cartService.updateCurrentCart(this.currentShoppingCart)
    this.send()


  }


  public cart$ = new Subject<Cart>();

  send () {
    this.cart$.next(this.currentShoppingCart);
  }

}
