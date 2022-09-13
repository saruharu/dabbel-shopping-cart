import { Injectable } from '@angular/core';

import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';

@Injectable({
  providedIn: 'root'
})
export class AppCommonService {

  constructor(private sanitizer: DomSanitizer, private iconRegistry: MatIconRegistry) { }

  setSvgIcons(){
    this.iconRegistry.addSvgIcon('bell',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/bell.svg'));
    this.iconRegistry.addSvgIcon('calendar',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/calendar.svg'));
    this.iconRegistry.addSvgIcon('check-square',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/check-square.svg'));
    this.iconRegistry.addSvgIcon('credit-card',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/credit-card.svg'));
    this.iconRegistry.addSvgIcon('eye',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/eye.svg'));
    this.iconRegistry.addSvgIcon('home',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/home.svg'));
    this.iconRegistry.addSvgIcon('mail',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/mail.svg'));
    this.iconRegistry.addSvgIcon('message-square',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/message-square.svg'));
    this.iconRegistry.addSvgIcon('search',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/search.svg'));
    this.iconRegistry.addSvgIcon('shopping-cart',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/shopping-cart.svg'));
    this.iconRegistry.addSvgIcon('star',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/star.svg'));
    this.iconRegistry.addSvgIcon('type',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/type.svg'));
    this.iconRegistry.addSvgIcon('x',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/x.svg'));
    this.iconRegistry.addSvgIcon('menu',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/menu.svg'));
    this.iconRegistry.addSvgIcon('arrow-right',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-right.svg'));
    this.iconRegistry.addSvgIcon('arrow-down',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/arrow-down.svg'));

    this.iconRegistry.addSvgIcon('plus',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/plus.svg'));
    this.iconRegistry.addSvgIcon('minus',this.sanitizer.bypassSecurityTrustResourceUrl('assets/icons/minus.svg'));

    this.iconRegistry.addSvgIcon('expand_more',this.sanitizer.bypassSecurityTrustResourceUrl('assets/mat-icons/expand_more.svg'));

    this.iconRegistry.addSvgIcon('plus-icon',this.sanitizer.bypassSecurityTrustResourceUrl('assets/cart-icons/plus-icon.svg'));
    this.iconRegistry.addSvgIcon('minus-icon',this.sanitizer.bypassSecurityTrustResourceUrl('assets/cart-icons/minus-icon.svg'));


  }
}
