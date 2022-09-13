export class MenuItem{
    icon!: string;
    name!: string;
    subItems: [] = []
    isNew  = false;
    constructor(menuitem:any){
        this.setIcon(menuitem);
        this.setName(menuitem);
        this.setSubItems(menuitem)
        this.setIsNew(menuitem);
    }

    setIcon(menuitem:any){
        this.icon = menuitem?.icon;
    }

    setName(menuitem:any){
        this.name = menuitem?.name;
    }

    setSubItems(menuitem:any){
        this.subItems = (menuitem?.subItems || []).map((subitem:any)=>new MenuItem(subitem))
    }

    setIsNew(menuitem:any){
        this.isNew = menuitem?.isNew || false;
    }

    getIcon(){
        return this.icon;
    }

    getName(){
        return this.name;
    }

    getSubItems(){
        return this.subItems || [];
    }

    hasSubItems(){
        return this.getSubItems().length>0
    }

    getIsNew(){
        return this.isNew;
    }
}