import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../dialogo/dialogo.component';

@Component({
	selector: 'app-emergentes',
	templateUrl: './emergentes.component.html',
	styleUrls: ['./emergentes.component.scss']
})
export class EmergentesComponent implements OnInit {

	longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;

	constructor(public dialog: MatDialog) { }

	ngOnInit(): void {
	}

	openDialog(): void {
		const dialogRef = this.dialog.open(DialogoComponent, {
			width: '250px',
			data: { name: 'EDWIN', animal: 'CABALLO' },
		});

		dialogRef.afterClosed().subscribe(result => {
			console.log('The dialog was closed');
		});
	}

}
