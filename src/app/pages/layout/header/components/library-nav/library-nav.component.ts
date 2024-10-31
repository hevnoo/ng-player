import { Component } from '@angular/core';

@Component({
  selector: 'app-library-nav',
  templateUrl: './library-nav.component.html',
  styleUrls: ['./library-nav.component.scss']
})
export class LibraryNavComponent {
  navList = [
    { id: 0, name: '歌单' },
    { id: 1, name: '播客' },
    { id: 2, name: '艺人' },
    { id: 3, name: '专辑' },
  ]
}
