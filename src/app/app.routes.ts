import { Routes } from '@angular/router';
import { route, routingModule } from '@shared/constants';
import { HomeLayoutComponent } from '@layouts/home-layout/home-layout.component';
import { InnerPagesLayoutComponent } from '@layouts/inner-pages-layout/inner-pages-layout.component';
import { BoxWrapperLayoutComponent } from '@layouts/box-wrapper-layout/box-wrapper-layout.component';
import { HomeModule } from '@routing-modules/home/home.module';
import { PagesModule } from '@routing-modules/pages/pages.module';
import { BlogsModule } from '@routing-modules/blogs/blogs.module';
import { ProjectsModule } from '@routing-modules/projects/projects.module';
import { BoxedModule } from '@routing-modules/boxed/boxed.module';

export const routes: Routes = [
    { path: routingModule.HOME, component: HomeLayoutComponent, loadChildren: () => HomeModule },
    { path: routingModule.HOME, component: BoxWrapperLayoutComponent, loadChildren: () => BoxedModule },
    { path: routingModule.PAGES, component: InnerPagesLayoutComponent, loadChildren: () => PagesModule },
    { path: routingModule.BLOGS, component: InnerPagesLayoutComponent, loadChildren: () => BlogsModule },
    { path: routingModule.PROJECTS, component: InnerPagesLayoutComponent, loadChildren: () => ProjectsModule },
    {
        path: "**",
        pathMatch: "full",
        redirectTo: routingModule.PAGES + "/" + route.pages.ERROR404
    }
];