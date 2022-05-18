import { Component } from "@angular/core";

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css']
})
export class FooterComponent {
    public autor: any = { nombre: 'Daniel', apellido: 'Piedrahita' }; // any es generico, cualquier tipo de dato
}