import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { EngineComponent } from './engine/engine.component';
import { UiInfobarBottomComponent } from './ui/ui-infobar-bottom/ui-infobar-bottom.component';
import { UiInfobarTopComponent } from './ui/ui-infobar-top/ui-infobar-top.component';
import { UiSidebarLeftComponent } from './ui/ui-sidebar-left/ui-sidebar-left.component';
import { UiSidebarRightComponent } from './ui/ui-sidebar-right/ui-sidebar-right.component';
import { UiLoadingComponent } from './ui/ui-loading/ui-loading.component';
import { UiComponent } from './ui/ui.component';
import { MainMenuComponent } from './menus/main-menu/main-menu.component';
import { SplashComponent } from './menus/splash/splash.component';
import { RouterModule } from '@angular/router';
import { PlayComponent } from './menus/play/play.component';
import { GameRoutingModule } from './game-routing/game-routing.module';
import { ShopComponent } from './menus/shop/shop.component';
import { GameInstanceComponent } from './engine/game-instance/game-instance.component';
import { UiInfobarBottomHealthbarComponent } from './ui/ui-infobar-bottom/healthbar/ui-infobar-bottom-healthbar.component';
import { UiInfobarHeaderComponent } from './ui/ui-infobar-header/ui-infobar-header.component';
import { PercentStringPipePipe } from './pipes/percent-string-pipe.pipe';
import { StatusbarComponent } from './ui/ui-infobar-bottom/statusbar/statusbar.component';

@NgModule({
	declarations: [
		AppComponent,
		EngineComponent,
		UiComponent,
		UiInfobarBottomComponent,
		UiInfobarTopComponent,
		UiSidebarLeftComponent,
		UiSidebarRightComponent,
		UiLoadingComponent,
		MainMenuComponent,
		SplashComponent,
		PlayComponent,
		ShopComponent,
		GameInstanceComponent,
		UiInfobarBottomHealthbarComponent,
		UiInfobarHeaderComponent,
		PercentStringPipePipe,
		StatusbarComponent
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
