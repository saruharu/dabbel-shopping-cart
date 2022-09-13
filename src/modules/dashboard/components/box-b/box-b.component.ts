import { Component, HostListener, Input, OnInit } from '@angular/core';
import { englishStrings } from 'src/assets/strings/english';@Component({
  selector: 'app-box-b',
  templateUrl: './box-b.component.html',
  styleUrls: ['./box-b.component.css']
})
export class BoxBComponent implements OnInit {

  constructor() { }


  ngOnInit(): void {
    this.getPlatform()

  }

  platform = 'web'

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

  box_b = {
    title: 'Title', side_title: 'Updated N month(s) ago', circles: [
      {number: "999k",text:"Lorem",img_color:"var(--circle1-text)", img_background:"rgb(255,255,255,.12)"},
      {number: "999k",text:"Lorem",img_color:"var(--circle2-text)", img_background:"var(--circle2-background)"},
      {number: "999k",text:"Lorem",img_color:"var(--circle3-text)", img_background:"var(--circle3-background)"},
      {number: "999k",text:"Lorem",img_color:"var(--circle4-text)", img_background:"var(--circle4-background)"}

    ]
  }

}
