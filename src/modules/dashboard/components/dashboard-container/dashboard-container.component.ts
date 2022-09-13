import { AfterViewInit, Component, HostListener, Input, OnInit, ViewContainerRef } from '@angular/core';
import { TopbarComponent } from 'src/modules/app-common/components';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.css']
})
export class DashboardContainerComponent implements OnInit {

  constructor(public viewContainerRef: ViewContainerRef) { }

  ngOnInit(): void {
    this.getPlatform()

  }

  @Input('platform') platform="web"
  tiles_Web: any[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue', component: 'BoxAComponent'},
    {text: 'Two', cols: 4, rows: 1, color: 'lightgreen', component: 'BoxBComponent'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', component: 'BoxCComponent'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1', component: 'BoxDComponent'},
    {text: 'Five', cols: 4, rows: 2, color: 'lightblue', component: 'BoxFComponent'},
    {text: 'Six', cols: 2, rows: 1, color: 'lightgreen', component: 'BoxEComponent'},
    {text: 'Seven', cols: 3, rows: 2, color: 'lightpink', component: 'BoxGComponent'},
    {text: 'Eight', cols: 3, rows: 2, color: '#DDBDF1', component: 'BoxHComponent'},
  ];
  

  tiles_Tablet: any[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue', component: 'BoxAComponent'},
    {text: 'Two', cols: 2, rows: 1, color: 'lightgreen', component: 'BoxBComponent'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', component: 'BoxCComponent'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1', component: 'BoxDComponent'},
    {text: 'Five', cols: 2, rows: 1, color: 'lightblue', component: 'BoxEComponent'},
    {text: 'Six', cols: 4, rows: 1, color: 'lightgreen', component: 'BoxFComponent'},
    {text: 'Seven', cols: 2, rows: 2, color: 'lightpink', component: 'BoxGComponent'},
    {text: 'Eight', cols: 2, rows: 2, color: '#DDBDF1', component: 'BoxHComponent'},
  ];

  tiles_Mobile: any[] = [
    {text: 'One', cols: 2, rows: 1, color: 'lightblue', component: 'BoxAComponent'},
    {text: 'Two', cols: 2, rows: 2, color: 'lightgreen', component: 'BoxBComponent'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink', component: 'BoxCComponent'},
    {text: 'Four', cols: 1, rows: 1, color: '#DDBDF1', component: 'BoxDComponent'},
    {text: 'Five', cols: 2, rows: 1, color: 'lightblue', component: 'BoxEComponent'},
    {text: 'Six', cols: 2, rows: 1, color: 'lightgreen', component: 'BoxFComponent'},
    {text: 'Seven', cols: 2, rows: 2, color: 'lightpink', component: 'BoxGComponent'},
    {text: 'Eight', cols: 2, rows: 2, color: '#DDBDF1', component: 'BoxHComponent'},
  ];
  
  @HostListener('window:resize', ['$event'])
  onResize(event:any){
    this.getPlatform()
    console.log("platform",this.platform)
  }
  
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



}
