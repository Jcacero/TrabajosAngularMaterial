import { Component, OnInit } from '@angular/core';
import { AnimalDescription } from 'src/app/model/animal-description';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  public info: AnimalDescription [];
  public megusta: boolean =false;

  constructor() { 
    this.info=[
      {
        nombre: 'Shiba Inu',
        caracteristicas: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        avatar:"background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');background-size: cover",
        imagen:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        tipo:'Dog Breed'
      },
      {
        nombre: 'Shiba Inu',
        caracteristicas: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        avatar:"background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');background-size: cover",
        imagen:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        tipo:'Dog Breed'
      }
    ]
  }

  ngOnInit(): void {
  }

  darlike(){
    this.megusta=true;
  }
  openDialog(): void {
      const dialogoRef= this.dialog.open("Hola amigo")
    }
}