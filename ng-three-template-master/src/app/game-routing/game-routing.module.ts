import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from '../menus/splash/splash.component';
import { MainMenuComponent } from '../menus/main-menu/main-menu.component';
import { PlayComponent } from '../menus/play/play.component';
import { ShopComponent } from '../menus/shop/shop.component';

const routes: Routes = [
  {
    path: '',
    component: SplashComponent
  },
  {
    path: 'main-menu',
    component: MainMenuComponent
  },
  {
    path: 'play',
    component: PlayComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class GameRoutingModule { }
