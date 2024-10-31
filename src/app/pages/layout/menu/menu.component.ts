import { Component, Output, EventEmitter } from '@angular/core';
import { menuList, _menuList } from './menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  isCollapsed: any = false;
  public menu = menuList;
  public _menu = _menuList;

  @Output() collapsed = new EventEmitter<boolean>();

  constructor(){ };

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
    this.collapsed.emit(this.isCollapsed)
  }


}
