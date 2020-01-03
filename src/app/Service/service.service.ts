import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Persona } from '../Modelo/Persona';
import { HttpHeaders } from '@angular/common/http';
import { HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  

  constructor(private service:HttpClient) { }

  URL = 'http://localhost:8081/cursoSpring/persona';

  getPersonas(){
    return this.service.get<Persona[]>(this.URL);
  }

  createPersona(persona:Persona){
    return this.service.post<Persona>(this.URL, persona);
  }

  getPersonaId(id:number){
    return this.service.get<Persona>(this.URL+"/"+id);
  }

  updatePersona(persona:Persona){
    console.log(persona.name);
    return this.service.put<Persona>(this.URL+"/"+persona.id,persona);
  }
}
