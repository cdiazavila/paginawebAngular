import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  listaPersonajes:any;

  constructor(private apiService: ApiService) {
    
    this.apiService.getPersonajes().subscribe(data => {
      this.listaPersonajes=data.results;
      
      console.log(this.listaPersonajes)

     })
   }

  ngOnInit(): void {
  }

}
