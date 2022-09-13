import { Component, HostListener, Input, OnInit } from '@angular/core';
import { englishStrings } from 'src/assets/strings/english';

@Component({
  selector: 'app-box-a',
  templateUrl: './box-a.component.html',
  styleUrls: ['./box-a.component.css']
})
export class BoxAComponent implements OnInit {

  constructor() { }

  box_a = {
    title: englishStrings.title, content: englishStrings['lorem_text']
  }
  
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
}
