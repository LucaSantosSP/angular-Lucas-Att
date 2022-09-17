import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucas-timer-component',
  templateUrl: './lucas-timer-component.component.html',
  styleUrls: ['./lucas-timer-component.component.css'],
})
export class LucasTimerComponentComponent implements OnInit {
  counter: number = 0;
  timer = setInterval(() => {
    this.counter++;
  }, 1000);
  constructor() {}

  ngOnInit() {}
}
