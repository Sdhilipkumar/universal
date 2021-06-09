import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InputControlsComponent } from './input-controls.component';

const routes: Routes = [{ path: '', component: InputControlsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputControlsRoutingModule { }
