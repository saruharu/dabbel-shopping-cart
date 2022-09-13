import { Component, HostListener, Input, OnInit } from '@angular/core';
import { englishStrings } from 'src/assets/strings/english';
@Component({
  selector: 'app-box-f',
  templateUrl: './box-f.component.html',
  styleUrls: ['./box-f.component.css']
})
export class BoxFComponent implements OnInit {

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

  
  box_f = {
    content: "I am a text centered!"
  }


}
