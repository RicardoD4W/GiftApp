import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { GifsService } from '../gifs.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@ViewChild('texto') texto! : ElementRef<HTMLInputElement>;

  constructor(private gifsService : GifsService) { }

  ngOnInit(): void {
  }


  busqueda(texto : string){
      this.gifsService.addBusqueda(texto);
      this.texto.nativeElement.value = '';
  }
}
