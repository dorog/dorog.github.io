import { Component, Input, OnInit } from '@angular/core';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-clue',
  templateUrl: './clue.component.html',
  styleUrls: ['./clue.component.css']
})
export class ClueComponent implements OnInit {

  @Input()
  left: number;

  @Input()
  top: number;

  @Input()
  home: HomeComponent;

  constructor() { }

  ngOnInit() { }

  selectClue() {
    this.home.onMove(-this.left, -this.top);
  }
}
