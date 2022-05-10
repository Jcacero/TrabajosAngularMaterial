import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DialogoComponent } from './card/dialogo/dialogo.component';
import { SlideComponent } from './slide/slide.component';


@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent,
    DialogoComponent,
    SlideComponent
  ],
  exports: [
    CardComponent,
    NavbarComponent,
    SlideComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
