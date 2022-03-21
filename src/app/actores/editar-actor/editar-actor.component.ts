import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';


@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(  private activeRoute: ActivatedRoute  ) { }

  modelo: actorDTO = { nombre: 'Cesar', fechaNacimiento: new Date(), foto:'https://es.web.img2.acsta.net/c_310_420/pictures/14/03/06/13/55/345785.jpg' }

  ngOnInit(): void {
    
    this.activeRoute.params.subscribe(params => {
      // alert( params.id);
    } );
  }

  guardarCambios( actor: actorCreacionDTO ){
    console.log(actor);
  }

}
