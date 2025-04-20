import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { route } from '@shared/constants';

import { BlogGridComponent } from '@components/pages/blog/blog-grid/blog-grid.component';
import { BlogListComponent } from '@components/pages/blog/blog-list/blog-list.component';
import { BlogMasonaryComponent } from '@components/pages/blog/blog-masonary/blog-masonary.component';
import { PostImageComponent } from '@components/pages/post/post-image/post-image.component';
import { PostGalleryComponent } from '@components/pages/post/post-gallery/post-gallery.component';
import { PostVideoComponent } from '@components/pages/post/post-video/post-video.component';
import { PostWithSidebarComponent } from '@components/pages/post/post-with-sidebar/post-with-sidebar.component';

const routes: Routes = [
  { path: route.blogs.GRID, component: BlogGridComponent },
  { path: route.blogs.LIST, component: BlogListComponent },
  { path: route.blogs.MASONRY, component: BlogMasonaryComponent },
  { path: route.blogs.detail.IMAGE, component: PostImageComponent },
  { path: route.blogs.detail.GALLERY, component: PostGalleryComponent },
  { path: route.blogs.detail.VIDEO, component: PostVideoComponent },
  { path: route.blogs.detail.SIDEBAR, component: PostWithSidebarComponent }
]

/**
 * Defines all 'blog' pages (navigation pages>blogs and post menu) collectively with routing seperately  
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
export class BlogsModule { }
