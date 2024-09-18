import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CdkDragDrop, DragDropModule, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,DragDropModule,FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  {
  
   
  todo:string[] = [" instalar angular","instalar servicios","crear proyectos"];
  progreso:string[]=[];
  finalizada:string[]=[];

  tarea ='';

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
  agregartarea(){
    if(this.tarea===''){
      return;
    }

  

    this.todo.push(this.tarea);
    this.tarea='';

  }
  


  

}
