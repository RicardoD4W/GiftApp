import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './side-bar/side-bar.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    SideBarComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    SideBarComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
