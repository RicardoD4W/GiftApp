import { Component, OnInit } from '@angular/core';
import { GifsService } from '../gifs.service';
import { Datum } from '../interface/interface';

@Component({
  selector: 'app-show-results',
  templateUrl: './show-results.component.html',
  styleUrls: ['./show-results.component.css']
})
export class ShowResultsComponent implements OnInit {

  constructor(private gifsService : GifsService) { }

  ngOnInit(): void {
  }

  get gifs() : Datum[]{
    return this.gifsService.getGifs();
    console.log("🚀 ~ file: show-results.component.ts ~ line 18 ~ ShowResultsComponent ~ getgifs ~ this.gifsService.getGifs()", this.gifsService.getGifs())
  }



}
