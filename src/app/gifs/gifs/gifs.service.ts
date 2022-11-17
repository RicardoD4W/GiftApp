import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Datum } from './interface/interface';



@Injectable({
  providedIn: 'root'
})
export class GifsService {

  constructor(private HttpClient : HttpClient) { 
    if(localStorage.getItem('Gif')){
        this.busquedasRealizadas =  JSON.parse(localStorage.getItem('Gif')!) || [];
    }
  }

  private API_KEY : string = 'hXOKPK2TYHBfgjrwL60pCjwjgo0G0f45';


  busquedasRealizadas : string[] = [];
  gifs : Datum[] = [];




  getBusquedas() : string[]{
    return this.busquedasRealizadas;
  }

  getGifs() : Datum[]{
    return this.gifs;
  }

  addBusqueda(busqueda : string) : void {
    let busq = busqueda.toLocaleUpperCase();

    if(busqueda !== ''){
      if(this.getBusquedas().length > 10 && !this.getBusquedas().includes(busq)){
          this.getBusquedas().pop();
          this.busquedasRealizadas.unshift(busq);
        }else{
          if(this.getBusquedas().includes(busq)){
            console.log('Repetida');
          }else{        
          this.busquedasRealizadas.unshift(busq);
          localStorage.setItem('Gif', JSON.stringify(this.busquedasRealizadas));
          }
        }  
          }else{
            alert('No se permite hacer búsquedas vacías');
          }




      this.peticion(busqueda);
  }
  

  peticion(busqueda : string, limite : string = '10'){
    this.HttpClient.get(`https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${busqueda}&limit=${limite}`)
    .subscribe((response : any)=>{
        this.gifs = response.data;
  }); 
  }




  // peticion = async (busqueda : string, limite : string = '10')=>{
  //   try {
        
  //       const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=${this.API_KEY}&q=${busqueda}&limit=${limite}`, {
  //       method: 'GET',
  //       headers: {}
  //     });
    


  //     if (response.ok) {
  //       const result = await response.json();
  //       this.gifs = result.data;
  //       console.log(this.gifs);
  //     }
  //   } catch (err) {
  //     console.error(err);
  //   }
  // }










  }






