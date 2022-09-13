import { Component, HostListener, OnInit } from '@angular/core';
import { AppCommonService } from 'src/modules/app-common/services/app-common.service';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { CartService } from 'src/modules/shopping-cart/services/cart.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DABBEL AI';
  addUserDataSubscription!: Subscription;


  constructor(private appCommonService: AppCommonService,private titleService: Title, private router: Router,
    private cartService: CartService){

    this.setAppTitles()
    this.appCommonService.setSvgIcons();
    this.getPlatform()
  }

  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.getPlatform()
    console.log("platform",this.platform)
  }

  platform="web"

  getPlatform(){
    if(/Android|webOS|iPhone|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
      this.platform="mobile"
    }
    else{
      if(/iPad|iPod/i.test(navigator.userAgent)){
        this.platform="tablet"
      }
      else{
        this.platform="web"
      }
    }
  }

  setAppTitles(){
    this.router.events
    .pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => {
        let route: ActivatedRoute = this.router.routerState.root;
        let routeTitle = '';
        while (route!.firstChild) {
          route = route.firstChild;
        }
        if (route.snapshot.data['title']) {
          routeTitle = route!.snapshot.data['title'];
        }
        return routeTitle;
      })
    )
    .subscribe((title: string) => {
      if (title) {
        this.titleService.setTitle(`${title} | ${this.title}`);
      }
    });
  }


}

