import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { Cart } from 'src/modules/shopping-cart/models/cart';
import { CartService } from 'src/modules/shopping-cart/services/cart.service';
import { ShoppingCartDialogComponent } from '../shopping-cart-dialog/shopping-cart-dialog.component';


@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {


  @Input('platform') platform="web"
  constructor(private dialog: MatDialog,private cartService: CartService) { }

  ngOnInit(): void {
    this.currentCount = this.cartService.getCount()
    this.getCart()

  }

  currentCount = 0

  openCartPopUp(){
    const dialogRef = this.dialog.open(ShoppingCartDialogComponent, {
      width: '470px'
    });

    dialogRef.componentInstance.cart$
    .pipe(takeUntil(dialogRef.afterClosed()))
    .subscribe((cart:any) => {
      console.log("cart updated",cart);
      this.currentCount = cart.getTotalCount()
  });
  }

  currentShoppingCart!: Cart;
  async getCart(){
    this.currentShoppingCart = await this.cartService.getCart();
    this.currentCount = this.currentShoppingCart.getCartItemGroups().map(group=>group.getCount()).reduce((a,b)=>a+b)
  }

  user = {username: "Username", role : "admin"}



}
