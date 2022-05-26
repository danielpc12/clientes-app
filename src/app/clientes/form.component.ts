import { Component, OnInit } from '@angular/core';
import { Cliente } from './cliente';
import { ClienteService } from './cliente.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { Region } from './region';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html'
})
export class FormComponent implements OnInit {

  public cliente: Cliente= new Cliente();
  regiones: Region[];
  public titulo: string = "Crear Cliente";


  constructor(private clienteService: ClienteService, 
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(){
    this.cargarCliente();

    this.clienteService.getRegiones().subscribe(regiones =>{
      this.regiones = regiones;
    })
  }

  cargarCliente(): void{
    this.activatedRoute.params.subscribe(params =>{
      let id = params['id']
      if(id){
        this.clienteService.getCliente(id).subscribe((cliente) => this.cliente = cliente)
      }
    })
  }

  public create(): void{
    this.clienteService.create(this.cliente)
      .subscribe(cliente => {
        this.router.navigate(['/clientes'])
        swal('Nuevo cliente', `Cliente ${cliente.nombre} creado con éxito!`, 'success')
      })
  }

  update():void{
    this.clienteService.update(this.cliente)
    .subscribe( cliente => {
      this.router.navigate(['/clientes'])
      swal('Cliente actualizado', `Cliente ${cliente.nombre} actualizado con éxito!`, 'success')
    })
  }

  compararRegion(o1: Region, o2: Region){
    if(o1 === undefined && o2 === undefined){
      return true;
    }
    return o1 == null || o2 == null? false: o1.id === o2.id;
  }
}
