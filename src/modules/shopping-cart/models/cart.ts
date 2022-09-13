import { CartItemGroup, CURRENCY } from "./cart-item-group";

export class Cart{

    cartItemGroups: CartItemGroup[] = [];
    totalPrice: number = 0;

    constructor(cartItems: CartItemGroup[]){
        this.setCartItemGroups(cartItems);
    }
    
    setCartItemGroups(cartItems: CartItemGroup[]){
        this.cartItemGroups = cartItems;
        this.updateCart();
    }

    updateCart(){
        console.log("updating order");
        this.cartItemGroups = this.cartItemGroups.filter(item=>item.getCount()!=0);
        let cartItemsPricesArray = this.cartItemGroups.map(item=>item.getItemTotalPrice());
        if(cartItemsPricesArray.length!=0){
            let cartItemsTotal = cartItemsPricesArray.reduce((a,b)=>a+b);
            this.setTotalPrice(cartItemsTotal);
        }
        else{
            this.setTotalPrice(0);

        }
        let cartItemsCountArray = this.cartItemGroups.map(item=>item.getCount())

        if(cartItemsCountArray.length!=0){
            let cartItemsTotal = cartItemsCountArray.reduce((a,b)=>a+b);
            this.setTotalCount(cartItemsTotal);
        }
        else{
            this.setTotalCount(0)

        }
        
    }

    totalCount = 0;
    setTotalCount(count:number){
        this.totalCount = count;
    }

    getTotalCount(){
        return this.totalCount;
    }

    updateCartItems(cartItemGroup: CartItemGroup){
        let itemIndex = this.cartItemGroups.findIndex(item=>item.getItem()==cartItemGroup.getItem())
        if(itemIndex!=-1){
            this.cartItemGroups[itemIndex] = cartItemGroup;
        }
        this.updateCart();


        
    }

    setTotalPrice(price: number){
        this.totalPrice = price;
    }


    getCartItemGroups(){
        return this.cartItemGroups;
    }

    getTotalPrice(){
        return this.totalPrice;
    }

    getDisplayTotalPrice(){
        return `${CURRENCY}${this.getTotalPrice()}`
    }

    removeItemGroup(itemGroup: CartItemGroup){
        this.cartItemGroups=this.cartItemGroups.filter(group=>group.getItem()!=itemGroup.getItem())
        this.updateCart()
    }

    checkoutCart(){
        this.setCartItemGroups([]);
        this.updateCart();
        
    }
}