import { environment } from "src/environments/environment";
import { Item } from "./item";

export const CURRENCY = environment.CURRENCY;
export class CartItemGroup{

    item!: Item;
    count: number = 0;
    itemTotalPrice: number = 0;

    constructor(item:any){
        this.setItem(item);
        this.setInitCount(item)
        // this.addQuantity();
        this.calculateTotal();
    }

    setInitCount(item:any){
        this.count = item?.count || 0;
    }

    
    setItem(item:any){
        if(item instanceof Item) this.item = item;
        else this.item = new Item(item);
    }

    getItem(){
        return this.item;
    }

    setCount(count:number){
        this.count = count;
    }
    

    getCount(){
        return this.count;
    }

    addQuantity(){
        this.count++;
        this.calculateTotal();
    }

    reduceQuantity(){
        this.count--;
        this.calculateTotal();

    }

    setItemTotalPrice(itemTotalPrice:number){
        this.itemTotalPrice = itemTotalPrice;
    }

    calculateTotal(){
        let unitPrice = this.item.getPrice() || this.item?.price;
        this.itemTotalPrice = unitPrice * this.count;
    }

    getItemTotalPrice(){
        return this.itemTotalPrice;
    }

    getDisplayPrice(){
        return `${CURRENCY}${this.getItemTotalPrice()}`
    }
}