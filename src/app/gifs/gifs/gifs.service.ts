import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor() { }

  private API_KEY : string = 'hXOKPK2TYHBfgjrwL60pCjwjgo0G0f45';


  busquedasRealizadas : string[] = [];

  getBusquedas() : string[]{
    return this.busquedasRealizadas;
  }

  addBusqueda(busqueda : string) : void {
    let busq = busqueda.toLocaleUpperCase();

    if(busqueda !== ''){
      if(this.getBusquedas().length > 10){
          this.getBusquedas().pop();
          this.busquedasRealizadas.unshift(busq);
        }else{
          if(this.getBusquedas().includes(busq)){
            console.log('Repetida');
          }else{        
          this.busquedasRealizadas.unshift(busq);
          }
        }  
          }else{
            alert('No se permite hacer búsquedas vacías');
          }
  }
}
