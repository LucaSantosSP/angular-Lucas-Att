import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucas-random-numbers-component',
  templateUrl: './lucas-random-numbers-component.component.html',
  styleUrls: ['./lucas-random-numbers-component.component.css'],
})
export class LucasRandomNumbersComponentComponent implements OnInit {
  @Input() number: String;
  public random: Array<string> = [];

  constructor() {}

  ngOnInit() {}

  randomNumbers() {
    for (let i = 0; i <= Number(this.number); i++) {
      return this.random.push();
    }
  }
}
