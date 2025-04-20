import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { route } from '@shared/constants';

import { AboutUs1Component } from '@components/pages/about/about-us1/about-us1.component';
import { ServicesComponent } from '@components/pages/services/services.component';
import { FaqComponent } from '@components/pages/faq/faq.component';
import { Error404Component } from '@components/pages/error404/error404.component';
import { ContactComponent } from '@components/pages/contact/contact.component';

const routes: Routes = [
  { path: route.pages.ABOUT, component: AboutUs1Component },
  { path: route.pages.SERVICES, component: ServicesComponent },
  { path: route.pages.FAQ, component: FaqComponent },
  { path: route.pages.ERROR404, component: Error404Component },
  { path: route.pages.CONTACT, component: ContactComponent }
]

/**
 * Defines miscellaneous pages collectively with routing seperately  
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
export class PagesModule { }
