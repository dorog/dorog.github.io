import { animate, AnimationBuilder, style  } from '@angular/animations';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit  {

  @ViewChild('detectiveWall')
  detectiveWall: ElementRef;

  constructor(private animationBuilder: AnimationBuilder) { }

  ngOnInit(){ }

  currentLeftPosition = 0;
  currentTopPosition = 0;

  onMove(left: number, top: number) {

    let itemHeigth = 210;
    let itemWidth = 410;

    let calculatedLeft = 1920 / 2 - itemWidth / 2 + left;
    let calculatedTop = 1089 / 2 - itemHeigth / 2 + top;

    let distance = Math.pow(Math.pow(this.currentLeftPosition - calculatedLeft, 2) + Math.pow(this.currentTopPosition - calculatedTop, 2), 0.5);
    let time = distance / 2;

    console.log(time);

    const animation = this.animationBuilder.build([
      style({
        transform: 'translate(' + this.currentLeftPosition + 'px,' + this.currentTopPosition + 'px)'
      }),
      animate(time, style({
        transform: 'translate(' + calculatedLeft + 'px,' + calculatedTop + 'px)'
      }))
    ]);

    const player = animation.create(this.detectiveWall.nativeElement);
    player.play();

    this.currentLeftPosition = calculatedLeft;
    this.currentTopPosition = calculatedTop;
  }
}
