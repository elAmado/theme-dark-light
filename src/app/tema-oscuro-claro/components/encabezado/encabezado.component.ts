import { Component, HostBinding, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
	selector: 'app-encabezado',
	templateUrl: './encabezado.component.html',
	styleUrls: ['./encabezado.component.scss']
})
export class EncabezadoComponent implements OnInit {

	@HostBinding('class') className = '';

	toggleControl = new FormControl(false);
	otraVar: string = 'xxx';

	constructor(
		private router: Router,
	) { }

	ngOnInit(): void {
		this.toggleControl.valueChanges.subscribe(val => {
			this.className = val ? 'modoOscurito' : '';
			this.otraVar = val ? 'verdaderamente' : 'falsamente';
		});
	}

	mostrarBotones(): void {
		this.router.navigate(['/botones']);
	}

}
