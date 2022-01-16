import { Component, EventEmitter, Input, Output } from '@angular/core';
import { WeeklyMenuItem } from 'src/app/kitchen-dashboard/models/weekly-menu.model';

@Component({
  selector: 'app-weekly-menu-picker',
  templateUrl: './weekly-menu-picker.component.html',
  styleUrls: ['./weekly-menu-picker.component.scss']
})
export class WeeklyMenuPickerComponent {

  @Input() weeklyMenu: WeeklyMenuItem[]
  @Output() addToLunch = new EventEmitter<WeeklyMenuItem>();
  @Output() addToDinner = new EventEmitter<WeeklyMenuItem>();
}
