import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './main-page/main-page.component';
import { FavoritesComponent } from './favorites/favorites.component';



@NgModule({
  declarations: [
    MainPageComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    FavoritesComponent,
    MainPageComponent
  ]
})
export class MainModule { }
