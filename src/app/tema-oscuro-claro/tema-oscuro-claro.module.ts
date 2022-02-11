import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';

import { EncabezadoComponent } from './components/encabezado/encabezado.component';
import { BotonesComponent } from './components/botones/botones.component';
import { EmergentesComponent } from './components/emergentes/emergentes.component';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { UnComponenteMasComponent } from './components/un-componente-mas/un-componente-mas.component';


@NgModule({
	declarations: [
		EncabezadoComponent,
		BotonesComponent,
		EmergentesComponent,
		DialogoComponent,
		UnComponenteMasComponent,
	],
	imports: [
		CommonModule,
		RouterModule,
		FormsModule,
		ReactiveFormsModule,
		MaterialModule,
	],
	exports: [
		EncabezadoComponent,
		BotonesComponent,
		EmergentesComponent,
		DialogoComponent,
		UnComponenteMasComponent,
	],
})
export class TemaOscuroClaroModule { }
