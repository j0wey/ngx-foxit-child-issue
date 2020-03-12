import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SomeChildComponent } from "./some-child/some-child.component";


const routes: Routes = [
  {
    path: 'url-to-child',
    component: SomeChildComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
