export class Item {
    name!: string;
    price: number = 300;

    constructor(item:any){
        this.setName(item);
        this.setPrice(item);
    }


    setName(item:any){
        this.name = item?.name;
    }

    setPrice(item:any){
        this.price = item?.price;
    }

    getName(){
        return this.name;
    }

    getPrice(){
        return this.price;
    }

}