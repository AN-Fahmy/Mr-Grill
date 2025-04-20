import { Injectable } from '@angular/core';
import { projectCarousel, projectGrid, projectMasonry, projectClassic1, projectClassic2, projectDetail } from '@shared/data/content.json';

/**
 * Defines an intermediate layer to collect 'projects' data
 * (rendered as JSON)
 */
@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Default method to get different sections in 'Project Grid'.
   * @returns JSON Object
   */
  getProjectGridData() {
    return projectGrid;
  }

  /**
   * Default method to get different sections in 'Project Masonry'.
   * @returns JSON Object
   */
  getProjectMasonryData() {
    return projectMasonry;
  }

  /**
   * Default method to get different sections in 'Project Carousel'.
   * @returns JSON Object
   */
  getProjectCarouselData() {
    return projectCarousel;
  }

  /**
   * Default method to get different sections in 'Project Classic1'.
   * @returns JSON Object
   */
  getProjectClassic1Data() {
    return projectClassic1;
  }

  /**
   * Default method to get different sections in 'Project Classic2'.
   * @returns JSON Object
   */
  getProjectClassic2Data() {
    return projectClassic2;
  }

  /**
   * Default method to get different sections in 'Project Detail'.
   * @returns JSON Object
   */
  getProjectDetailData() {
    return projectDetail;
  }
}
