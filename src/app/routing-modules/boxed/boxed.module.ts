import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { route } from '@shared/constants';
import { Home3Component } from '@components/pages/home/home3/home3.component';

const routes: Routes = [
  { path: route.home.HOME3, component: Home3Component }
]

/**
 * Defines all 'boxed' pages (e.g. home3 page)  
 */
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class BoxedModule { }
