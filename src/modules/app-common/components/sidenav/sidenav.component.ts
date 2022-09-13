import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../../models/menu-item';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  @Input('platform') platform="web"

  constructor() {
    console.log("menu1",this.menuCategory1)
   }

  ngOnInit(): void {
  }

  menuCategory1 = [
    {
      icon: 'mail',
      name: 'Email',
    },
    {
      icon: 'message-square',
      name: 'Chat',
    },
    {
      icon: 'check-square',
      name: 'Todo',
    },
    {
      icon: 'calendar',
      name: 'Calendar'
    },
    {
      icon: 'shopping-cart',
      name: 'Ecommerce',
      subItems:[
        {icon: 'shopping-cart', name:'Ecommerce sub1'}
      ]
    }
  ].map(item=>new MenuItem(item))


  categoryTitle_1 = "category 1"
  categoryTitle_2= "category 2"

  menuCategory2 = [
    {
      icon: 'type',
      name: 'Typography',
    },
    {
      icon: 'eye',
      name: 'Feather',
    },
    {
      icon: 'credit-card',
      name: 'Cards',
      isNew: true,
      subItems:[
        {icon: 'credit-card', name:'Card 1'}
      ]
    }
  ].map(item=>new MenuItem(item))

}
