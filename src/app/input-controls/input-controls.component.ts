import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-controls',
  templateUrl: './input-controls.component.html',
  styleUrls: ['./input-controls.component.css']
})
export class InputControlsComponent implements OnInit {

  checkboxValue: boolean;
  indeterminateCheckboxValue: boolean | -1;

  constructor() { }

  ngOnInit(): void {
  }

}
