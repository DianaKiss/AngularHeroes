import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common'; // ezt is ki lehet torolni, mert nem deklaralok komponenseket a routing module-ban
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component';


const routes: Routes = [
  { path: 'heroes', component: HeroesComponent }
];

@NgModule({

  exports: [ RouterModule ],

  imports: [RouterModule.forRoot(routes) ],


  // imports: [
  //   CommonModule
  // ],
  // declarations: [] //ezt ki lehet torolni
})

export class AppRoutingModule { }
