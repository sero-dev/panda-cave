import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-daily-menu',
  templateUrl: './daily-menu.component.html',
  styleUrls: ['./daily-menu.component.scss']
})
export class DailyMenuComponent implements OnInit {

  @Input() weekday: string
  @Input() lunch: string | undefined
  @Input() dinner: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}
