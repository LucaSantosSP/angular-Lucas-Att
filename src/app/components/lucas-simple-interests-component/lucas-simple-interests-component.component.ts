import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucas-simple-interests-component',
  templateUrl: './lucas-simple-interests-component.component.html',
  styleUrls: ['./lucas-simple-interests-component.component.css'],
})
export class LucasSimpleInterestsComponentComponent implements OnInit {
  @Input() ci: String;
  @Input() tx: String;
  @Input() ta: String;
  constructor() {}

  ngOnInit() {}

  convertPorcentagem() {
    return Number(this.tx)/100;
  }

  jurosSimples() {
    return Number(this.ci) * this.convertPorcentagem() * Number(this.ta);
  }
}
