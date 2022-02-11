import { OverlayContainer } from '@angular/cdk/overlay';
import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	@HostBinding('class') className = '';

	isDarkTheme: boolean = true;

	constructor(
		private router: Router,
		private overlayContainer: OverlayContainer,
	) { }

	ngOnInit(): void {
		this.isDarkTheme = localStorage.getItem('theme') === "Dark" ? true : false;
		this.actualizarTema();
	}

	cambiarTema(): void {
		localStorage.setItem('theme', this.isDarkTheme ? "Dark" : "Light");
		this.actualizarTema();
	}

	actualizarTema(): void {
		this.className = this.isDarkTheme ? 'modoOscurito' : "";
		const classes = this.overlayContainer.getContainerElement().classList;
		if (this.isDarkTheme) {
			classes.add('modoOscurito');
		} else {
			classes.remove('modoOscurito');
		}
	}

	mostrarBotones(): void {
		this.router.navigate(['/botones']);
	}

	irARutaUnComponenteMas(): void {
		this.router.navigate(['/un-componente-mas']);
	}
}