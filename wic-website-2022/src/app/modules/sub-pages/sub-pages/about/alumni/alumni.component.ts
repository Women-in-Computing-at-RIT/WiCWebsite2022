import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumni',
  templateUrl: './alumni.component.html',
  styleUrls: ['./alumni.component.scss']
})
export class AlumniComponent implements OnInit {
  readonly assetLink = '../../../../../../assets/alumni'
  readonly imgCount = 14;
  slides: string[] = [];
  constructor() { }

  ngOnInit(): void {
    for (let i = 1; i < this.imgCount; i++) {
      this.slides = [...this.slides, `${this.assetLink}${i}.png`]
    } 
  }

}
