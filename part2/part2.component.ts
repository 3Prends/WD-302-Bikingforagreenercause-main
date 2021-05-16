import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-part2',
  templateUrl: './part2.component.html',
  styleUrls: ['./part2.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000, style({opacity:1}))
      ])
    ])
  ]
})
export class Part2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

