import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'button',
    loadChildren: () =>
      import('./button/button.module').then((m) => m.ButtonModule),
  },
  {
    path: 'select',
    loadChildren: () =>
      import('./select/select.module').then((m) => m.SelectModule),
  },
  {
    path: 'input-controls',
    loadChildren: () =>
      import('./input-controls/input-controls.module').then(
        (m) => m.InputControlsModule
      ),
  },
  {
    path: 'alert',
    loadChildren: () =>
      import('./alert/alert.module').then((m) => m.AlertPageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
