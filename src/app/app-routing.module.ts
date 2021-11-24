import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';
import { PersonajeComponent } from './components/personaje/personaje.component';

const routes: Routes = [
  { path: '', redirectTo: 'inicio', pathMatch:'full'},
  { path: 'inicio', component: InicioComponent },
  {path:'personaje/:id',component: PersonajeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
