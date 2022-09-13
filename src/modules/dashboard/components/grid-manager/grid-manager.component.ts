import { Component, Input, OnInit } from '@angular/core';
import { BoxAComponent } from '../box-a/box-a.component';
import { BoxBComponent } from '../box-b/box-b.component';
import { BoxFComponent } from '../box-f/box-f.component';

@Component({
  selector: 'app-grid-manager',
  templateUrl: './grid-manager.component.html',
  styleUrls: ['./grid-manager.component.css']
})
export class GridManagerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input('tile') tile: any;

}
