import { Component, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import {
  MatBottomSheet,
  MatBottomSheetRef
} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  };
  logout():void{};
  randomFunction():void{}
}
