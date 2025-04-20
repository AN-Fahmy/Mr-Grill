import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { route } from '@shared/constants';
import { Home1Component } from '@components/pages/home/home1/home1.component';
import { Home2Component } from '@components/pages/home/home2/home2.component';
import { Home4Component } from '@components/pages/home/home4/home4.component';

const routes: Routes = [
  { path: route.BLANK, component: Home2Component },
  { path: route.home.HOME2, component: Home2Component },
  { path: route.home.HOME1, component: Home1Component },
  // for home 3 > route is defined in boxed module
  { path: route.home.HOME4, component: Home4Component }
]

/**
 * Defines all 'home' pages (navigation home menu) collectively with routing seperately  
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
export class HomeModule { }
