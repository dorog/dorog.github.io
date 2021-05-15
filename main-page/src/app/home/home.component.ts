import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('appear', [
      state('visible', style({
        opacity: 1,
      })),
      state('hidden', style({
        opacity: 0,
      })),
      transition('hidden => visible', [
        animate('2s')
      ]),
      transition('visible => hidden', [
        animate('2s')
      ]),
    ]),
    trigger('options', [
      state('visible', style({
        transform: 'scale(1)',
      })),
      state('hidden', style({
        transform: 'scale(0)',
      })),
      transition('hidden => visible', [
        animate('1s')
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit  {

  messages =["I've been waiting for you...", "Finally, you decided to check out my website... Good idea!", "Make your choice!"];

  message = "";
  isAnimationStarted = false;

  isOptionsVisible = false;

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.changeText(this.messages, 0);
    }, 1000);
  }

  private changeText(messages: string[], iter: number){
    this.message = messages[iter];
    this.isAnimationStarted = true;
    
    if(iter < messages.length - 1){
      setTimeout(() => {
        this.isAnimationStarted = false;
      }, 5000);
      setTimeout(() => {
        this.changeText(messages, iter + 1);
      }, 7000);
    }
    else {
      this.showOptions();
    }
  }

  private showOptions() {
    this.isOptionsVisible = true;
  }
}
