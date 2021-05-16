import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-part4',
  templateUrl: './part4.component.html',
  styleUrls: ['./part4.component.css'],
  animations:[
    trigger('fade', [
      transition('void => *', [
        animate(2000, style({transform: 'translateX(20px'}))
      ])
    ])
  ]
})
export class Part4Component implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

}

