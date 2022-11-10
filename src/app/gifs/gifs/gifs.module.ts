import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ShowResultsComponent } from './show-results/show-results.component';



@NgModule({
  declarations: [
    SearchComponent,
    MainPageComponent,
    ShowResultsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class GifsModule { }
