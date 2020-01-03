import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from 'src/app/Service/service.service';
import { ThrowStmt } from '@angular/compiler';
import { Persona } from 'src/app/Modelo/Persona';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  persona: Persona=new Persona();
  constructor(private router:Router, private service:ServiceService) { }

  ngOnInit() {
    this.Editar();
  }

  Editar(){
    let id = localStorage.getItem("id");
    console.log(localStorage.getItem("id"));
    this.service.getPersonaId(+id)
    .subscribe(data=>{
      this.persona=data;
    })}

    
  Actualizar(persona:Persona){
    this.service.updatePersona(persona).subscribe(
      data=>{
        this.persona=data;
        alert("Se actualizo con exito!");
        this.router.navigate(["listar"]);
      }
    )
  }

}
