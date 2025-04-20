import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { route } from '@shared/constants';

import { ProjectGridComponent } from '@components/pages/projects/project-grid/project-grid.component';
import { ProjectMasonaryComponent } from '@components/pages/projects/project-masonary/project-masonary.component';
import { ProjectCarousalComponent } from '@components/pages/projects/project-carousal/project-carousal.component';
import { ProjectClassicComponent } from '@components/pages/projects/project-classic/project-classic.component';
import { ProjectClassic2Component } from '@components/pages/projects/project-classic2/project-classic2.component';
import { ProjectDetailsComponent } from '@components/pages/projects/project-details/project-details.component';

const routes: Routes = [
  { path: route.projects.GRID, component: ProjectGridComponent },
  { path: route.projects.MASONRY, component: ProjectMasonaryComponent },
  { path: route.projects.CAROUSEL, component: ProjectCarousalComponent },
  { path: route.projects.CLASSIC1, component: ProjectClassicComponent },
  { path: route.projects.CLASSIC2, component: ProjectClassic2Component },
  { path: route.projects.DETAIL, component: ProjectDetailsComponent }
]

/**
 * Defines all 'projects' pages (navigation projects menu) collectively with routing seperately  
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
export class ProjectsModule { }
