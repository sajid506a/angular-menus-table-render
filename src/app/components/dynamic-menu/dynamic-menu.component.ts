import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-dynamic-menu',
  templateUrl: './dynamic-menu.component.html',
  styleUrls: ['./dynamic-menu.component.scss']
})
export class DynamicMenuComponent {
  @Input()
  menuItems: any[] = [];
  @Output() menuItemClicked = new EventEmitter<any>();

  constructor() { }

  onItemClick(menuItem: any) {
    this.menuItemClicked.emit(menuItem);
  }
}
