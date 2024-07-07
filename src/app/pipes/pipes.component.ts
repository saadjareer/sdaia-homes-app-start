import { Component, OnInit } from '@angular/core';
import {DatePipe, LowerCasePipe, SlicePipe, UpperCasePipe} from "@angular/common";

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  standalone: true,
  imports: [
    DatePipe,
    UpperCasePipe,
    LowerCasePipe,
    SlicePipe
  ],
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent {

  dateToday: string | undefined;

  name: string | undefined;

  constructor() { }

  ngOnInit(): void {

    this.dateToday = new Date().toDateString();

    this.name = "SdaiaAngular"

  }

}
