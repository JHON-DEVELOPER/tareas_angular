import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {DragDropModule} from '@angular/cdk/drag-drop';


@Component({
  selector: 'app-labs',
  standalone: true,
  imports: [CommonModule, DragDropModule],
  templateUrl: './labs.component.html',
  styleUrl: './labs.component.css'
})
export class LabsComponent {
  welcome = " hola hola ";
  tasks = [

    "instalar el angular",
    " crear componentes",
    "instal",
    "instalar servicios",
  ];

}
