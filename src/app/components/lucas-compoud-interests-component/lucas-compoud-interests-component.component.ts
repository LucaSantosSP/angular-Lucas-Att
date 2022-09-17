import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-lucas-compoud-interests-component',
  templateUrl: './lucas-compoud-interests-component.component.html',
  styleUrls: ['./lucas-compoud-interests-component.component.css'],
})
export class LucasCompoudInterestsComponentComponent implements OnInit {
  constructor() {}

  @Input() ci: String;
  @Input() tx: String;
  @Input() ta: String;

  ngOnInit() {}

  convertTaxa() {
    return 1 + Number(this.tx) / 100;
  }

  elevado() {
    return this.convertTaxa() ** Number(this.ta);
  }

  montanteAcumulado() {
    return Number(this.ci) * this.elevado();
  }
}
