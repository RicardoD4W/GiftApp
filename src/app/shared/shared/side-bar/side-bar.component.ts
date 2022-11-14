import { Component, OnInit } from '@angular/core';
import { GifsService } from 'src/app/gifs/gifs/gifs.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private giftSevice : GifsService) { }

  ngOnInit(): void {
  }

  get getBusquedas() : string[] {
    return this.giftSevice.getBusquedas();
  }

}
