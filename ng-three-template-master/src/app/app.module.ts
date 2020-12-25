import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {EngineComponent} from './engine/engine.component';
import {UiInfobarBottomComponent} from './ui/ui-infobar-bottom/ui-infobar-bottom.component';
import {UiInfobarTopComponent} from './ui/ui-infobar-top/ui-infobar-top.component';
import {UiSidebarLeftComponent} from './ui/ui-sidebar-left/ui-sidebar-left.component';
import {UiSidebarRightComponent} from './ui/ui-sidebar-right/ui-sidebar-right.component';
import {UiComponent} from './ui/ui.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { SplashComponent } from './menus/splash/splash.component';
import {RouterModule} from '@angular/router';
import { PlayComponent } from './menus/play/play.component';
import {GameRoutingModule} from './game-routing/game-routing.module';
import { ShopComponent } from './menus/shop/shop.component';

@NgModule({
  declarations: [
    AppComponent,
    EngineComponent,
    UiComponent,
    UiInfobarBottomComponent,
    UiInfobarTopComponent,
    UiSidebarLeftComponent,
    UiSidebarRightComponent,
    MainMenuComponent,
    SplashComponent,
    PlayComponent,
    ShopComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    GameRoutingModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}