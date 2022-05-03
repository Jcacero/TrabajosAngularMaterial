import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';
import { CardComponent } from './card/card.component';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  declarations: [
    CardComponent,
    NavbarComponent
  ],
  exports: [
    CardComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ComponentsModule { }
