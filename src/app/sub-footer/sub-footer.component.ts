import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-footer',
  templateUrl: './sub-footer.component.html',
  styleUrls: ['./sub-footer.component.css']
})
export class SubFooterComponent implements OnInit {
  categoryList = [
    "Graphics","Addons","Buttons","Infographics","PSDs","Fonts","Forms","Graphs","Icons","Textures","GUI","Logos","Templates","Patterns","navigation","Vectors","Themes","Backgrounds","UI Kits","Business Cards"
  ]
  constructor() { }

  ngOnInit() {
  }

}
