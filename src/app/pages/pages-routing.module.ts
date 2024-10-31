import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//路由守卫
import { AuthPagesGuard } from '../guards/auth-pages.guard';

import { PagesComponent } from './pages.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { LibraryComponent } from './components/library/library.component';
import { CreateComponent } from './components/create/create.component';
import { LikeComponent } from './components/like/like.component';
import { AboutComponent } from './components/about/about.component';


const routes: Routes = [{
    path: '',
    canActivateChild: [AuthPagesGuard],
    component: PagesComponent,
    children: [
      { path: 'home', component: HomeComponent, data: {auth: true} },
      { path: 'search', component: SearchComponent },
      { path: 'library', component: LibraryComponent },
      { path: 'create', component: CreateComponent },
      { path: 'like', component: LikeComponent },
      { path: 'about', component: AboutComponent },
    ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
