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

  @Input()
  destination: string;

  isSelected = false;

  constructor() { }

  ngOnInit() { }

  selectClue() {
    this.home.onMove(this, -this.left, -this.top);
  }
}
