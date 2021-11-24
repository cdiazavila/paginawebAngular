import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
@Component({
  selector: 'app-personaje',
  templateUrl: './personaje.component.html',
  styleUrls: ['./personaje.component.css']
})
export class PersonajeComponent implements OnInit {
  id:string;
  imagen:string;
  nombre:string;
   estado:string;
   genero: string;
   especie:string;
   creado:string;

  constructor(private  aRoute: ActivatedRoute, private apiservice:ApiService) {
    this.imagen=this.genero=this.especie=this.creado="";
    this.nombre="";
   this.estado="";
    this.id=this.aRoute.snapshot.paramMap.get('id')!;
    console.log(this.id)
    this.apiservice.getPersonaje(this.id).subscribe(data=>{
  
      this.nombre=data.name;
      this.imagen=data.image;
      this.estado=data.status;
      this.genero=data.gender;
      this.especie=data.species;
      this.creado=data.created;
    
     })
  }

  ngOnInit(): void {  
    
  }

}
