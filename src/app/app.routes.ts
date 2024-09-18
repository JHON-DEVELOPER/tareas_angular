import { Routes } from '@angular/router';
import {HomeComponent}from './pages/home/home.component';
import {LabsComponent}from './pages/labs/labs.component';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { FormsModule } from '@angular/forms';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent

    },
    {
        path: 'labs',
        component: LabsComponent

    }
];
