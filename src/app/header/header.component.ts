import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})
export class HeaderComponent {
    title = 'Bienvenido a Angular';
    curso: string = 'Curso Spring 5 con Angular 7';
}
