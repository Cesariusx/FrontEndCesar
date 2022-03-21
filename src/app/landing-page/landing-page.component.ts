import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {

      this.peliculasEnCines = [
        {
          titulo: 'Superman',
          fecha: new Date(),
          precio: 33.99,
          poster: 'https://es.web.img2.acsta.net/c_310_420/pictures/14/03/06/13/55/345785.jpg'
        },
        {
          titulo: 'SAW',
          fecha: new Date(),
          precio: 19.99,
          poster: 'https://m.media-amazon.com/images/I/91im2gYZrrL._AC_SX342_.jpg'
        }
      ]

  
  }


  peliculasEnCines;

  peliculasEstreno = [
    {
      titulo: 'TRANS',
      fecha: new Date(),
      precio: 888.99,
      poster: 'http://pm1.narvii.com/6294/f13ae74b90f16cae3bdd265a65c7121b862820a2_00.jpg'
    },
    {
      titulo: 'RATATOULLE',
      fecha: new Date(),
      precio: 400.55,
      poster: 'http://pm1.narvii.com/6294/f13ae74b90f16cae3bdd265a65c7121b862820a2_00.jpg'
    }    
  ];

}
