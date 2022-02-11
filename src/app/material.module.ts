import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
	declarations: [],
	imports: [
		CommonModule,
	],
	exports: [
		MatToolbarModule,
		MatIconModule,
		MatCardModule,
		MatButtonModule,
		MatDividerModule,
		MatDialogModule,
		MatFormFieldModule,
		MatInputModule,
		MatSlideToggleModule,
		MatMenuModule,
	],
})
export class MaterialModule { }
