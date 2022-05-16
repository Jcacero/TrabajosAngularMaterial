import { Component, OnInit } from '@angular/core';
import { MatDialog} from '@angular/material/dialog';
import { AnimalDescription } from 'src/app/model/animal-description';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {



  public info: AnimalDescription [];
  public megusta: boolean =false;

  constructor(public dialog: MatDialog) { 
    this.info=[
      {
        nombre: 'Shiba Inu',
        caracteristicas: 'The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.',
        avatar:"background-image: url('https://material.angular.io/assets/img/examples/shiba1.jpg');background-size: cover",
        imagen:'https://material.angular.io/assets/img/examples/shiba2.jpg',
        tipo:'Dog Breed'
      },
      {
        nombre: 'Golden Retriever',
        caracteristicas: 'The Golden Retriever is a Scottish breed of retriever dog of medium size. It is characterised by a gentle and affectionate nature and a striking golden coat. It is commonly kept as a pet and is among the most frequently registered breeds in several Western',
        avatar:"background-image: url('https://www.bunko.pet/__export/1611884288964/sites/debate/img/2021/01/28/10_cosas_que_solo_el_duexo_de_un_golden_retriever_conoce.jpeg_747488797.jpeg');background-size: cover",
        imagen:'https://vidaconmascotas.com/wp-content/uploads/2019/08/cropped-golden-retriever-1-scaled.jpg',
        tipo:'Dog Breed'
      }
    ]
  }

  ngOnInit(): void {
  }

  darlike(){
    this.megusta=true;
  }
  dislike(){
    this.megusta=false;
  }

  openDialog() {
    this.dialog.open(DialogoComponent);
  }

  
}