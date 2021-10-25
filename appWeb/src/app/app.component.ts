import { Component } from '@angular/core';
import { MsService } from './services/MsService';
import { Usuario } from './interfaces/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appWeb';
  SelectTipo: string  = 'EXTERNO';
  verSeleccion: string        = '';
  listado: Usuario[] = [];

  divMsg = false;
  divExterno = false;
  divInterno = false;
  divTable = false;

  constructor(
    private msService: MsService
  ) {}

  getUser() {
    this.msService.getUser(this.SelectTipo)
    .subscribe(user => {
      this.listado = user;
      console.log( user);
      console.log( this.listado.length);

      if(this.SelectTipo == "EXTERNO")
      {
        this.divExterno = true; 
        this.divInterno = false;
 
      }
      else
      {
        this.divInterno = true;
        this.divExterno = false;  


      }
      if(this.listado.length > 0)
      {
        this.divMsg = false;
        this.divTable = true;

      }
      else if (this.listado.length == 0)
      {
        this.divMsg = true;
      }
    });
  
    

  }
  

}
