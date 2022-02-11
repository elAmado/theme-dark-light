import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BotonesComponent } from './tema-oscuro-claro/components/botones/botones.component';
import { EmergentesComponent } from './tema-oscuro-claro/components/emergentes/emergentes.component';
import { UnComponenteMasComponent } from './tema-oscuro-claro/components/un-componente-mas/un-componente-mas.component';

const routes: Routes = [
	{
		path: 'botones',
		component: BotonesComponent,
	},
	{
		path: 'emergentes',
		component: EmergentesComponent,
	},
	{
		path: 'un-componente-mas',
		component: UnComponenteMasComponent,
	},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
