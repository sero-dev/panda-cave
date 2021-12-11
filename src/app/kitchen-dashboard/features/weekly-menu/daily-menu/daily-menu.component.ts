import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.scss']
})
export class DailyMenuComponent implements OnInit {

  @Input() weekday: string

  constructor() { }

  ngOnInit(): void {
  }

}
