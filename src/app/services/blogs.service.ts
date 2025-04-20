import { Injectable } from '@angular/core';
import { blogGrid, blogList, blogMasonry, blogDetailImage, blogDetailGallery, blogDetailVideo, blogDetailSidebar } from '@shared/data/content.json';

/**
 * Defines an intermediate layer to collect 'blogs' data
 * (rendered as JSON)
 */
@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Default method to get different sections in 'Blog Grid'.
   * @returns JSON Object
   */
  getBlogGridData() {
    return blogGrid;
  }

  /**
   * Default method to get different sections in 'Blog List'.
   * @returns JSON Object
   */
  getBlogListData() {
    return blogList;
  }

  /**
   * Default method to get different sections in 'Blog Masonry'.
   * @returns JSON Object
   */
  getBlogMasonryData() {
    return blogMasonry;
  }

  /**
   * Default method to get different sections in 'Blog Detail Image'.
   * @returns JSON Object
   */
  getBlogDetailImageData() {
    return blogDetailImage;
  }

  /**
   * Default method to get different sections in 'Blog Detail Gallery'.
   * @returns JSON Object
   */
  getBlogDetailGalleryData() {
    return blogDetailGallery;
  }

  /**
   * Default method to get different sections in 'Blog Detail Video'.
   * @returns JSON Object
   */
  getBlogDetailVideoData() {
    return blogDetailVideo;
  }

  /**
   * Default method to get different sections in 'Blog Detail Sidebar'.
   * @returns JSON Object
   */
  getBlogDetailSidebarData() {
    return blogDetailSidebar;
  }
}
