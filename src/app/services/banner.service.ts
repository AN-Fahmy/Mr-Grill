import { Injectable } from '@angular/core';
import banner from '@shared/data/banner.json';
import { route, pageUrl, blogsUrl, projectsUrl } from '@shared/constants';

/**
 * Defines an intermediate layer to collect 'inner page banner' data
 * (rendered as JSON)
 */
@Injectable({
  providedIn: 'root'
})
export class BannerService {

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Getting banners for different pages relative to page URL
   * @param url endpoint name for the current page
   * @returns JSON Object
   */
  getBannerFor(url: string) {
    switch (url) {
      case pageUrl(route.pages.ABOUT):
        return banner.about
      case pageUrl(route.pages.SERVICES):
        return banner.services
      case pageUrl(route.pages.FAQ):
        return banner.faq
      case pageUrl(route.pages.ERROR404):
        return banner.error404
      case pageUrl(route.pages.CONTACT):
        return banner.contact
      case blogsUrl(route.blogs.GRID):
        return banner.blogGrid
      case blogsUrl(route.blogs.LIST):
        return banner.blogList
      case blogsUrl(route.blogs.MASONRY):
        return banner.blogMasonry
      case blogsUrl(route.blogs.detail.IMAGE):
        return banner.blogDetailImage
      case blogsUrl(route.blogs.detail.GALLERY):
        return banner.blogDetailGallery
      case blogsUrl(route.blogs.detail.VIDEO):
        return banner.blogDetailVideo
      case blogsUrl(route.blogs.detail.SIDEBAR):
        return banner.blogDetailSidebar
      case projectsUrl(route.projects.GRID):
        return banner.projectGrid
      case projectsUrl(route.projects.MASONRY):
        return banner.projectMasonry
      case projectsUrl(route.projects.CAROUSEL):
        return banner.projectCarousel
      case projectsUrl(route.projects.CLASSIC1):
        return banner.projectClassic1
      case projectsUrl(route.projects.CLASSIC2):
        return banner.projectClassic2
      case projectsUrl(route.projects.DETAIL):
        return banner.projectDetail
      default:
        return banner.error404
    }
  }
}
