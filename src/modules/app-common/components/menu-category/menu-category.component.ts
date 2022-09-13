import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-menu-category',
  templateUrl: './menu-category.component.html',
  styleUrls: ['./menu-category.component.css']
})
export class MenuCategoryComponent implements OnInit {

  @Input('platform') platform="web"

  @Input('categoryList') categoryList: MenuItem[] = [];
  @Input('categoryTitle') categoryTitle = '';

  
  constructor() { }

  ngOnInit(): void {
  }

  menuOpen = false;
  openSubItems(item:MenuItem){
    this.menuOpen = !this.menuOpen;
    console.log("menuopen",this.menuOpen)
  }
  

}
