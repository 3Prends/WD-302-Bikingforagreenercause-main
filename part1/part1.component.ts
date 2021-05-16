import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import AOS from 'aos';
@Component({
  selector: 'app-part1',
  templateUrl: './part1.component.html',
  styleUrls: ['./part1.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [
        style({opacity: 0}),
        animate(2000, style({opacity:1}))
      ])
    ])
  ]
})
export class Part1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }

}
