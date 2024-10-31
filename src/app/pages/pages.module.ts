import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//antd
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzDividerModule } from 'ng-zorro-antd/divider';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
//
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
//菜单
import { MenuComponent } from './layout/menu/menu.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SearchComponent } from './components/search/search.component';
import { LibraryComponent } from './components/library/library.component';
import { CreateComponent } from './components/create/create.component';
import { LikeComponent } from './components/like/like.component';
//header的子组件，路径：layout/header/components/
import { BreadComponent } from './layout/header/components/bread/bread.component';
import { LibraryNavComponent } from './layout/header/components/library-nav/library-nav.component';
import { DropdownComponent } from './layout/header/components/dropdown/dropdown.component';


@NgModule({
  declarations: [
    PagesComponent,
    MenuComponent,
    HeaderComponent,
    FooterComponent,
    SearchComponent,
    LibraryComponent,
    CreateComponent,
    LikeComponent,
    BreadComponent,
    LibraryNavComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    NzButtonModule,
    NzLayoutModule,
    NzMenuModule,
    NzToolTipModule,
    NzSkeletonModule,
    NzIconModule,
    NzBreadCrumbModule,
    NzDividerModule,
    NzDropDownModule
  ]
})
export class PagesModule { }
