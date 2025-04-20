import { Injectable } from '@angular/core';
import { about, services, faq } from '@shared/data/content.json';

/**
 * Defines an intermediate layer to collect 'other-inner-pages' data
 * (rendered as JSON)
 */
@Injectable({
  providedIn: 'root'
})
export class PagesService {

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Default method to get different sections in 'about'.
   * @returns JSON Object
   */
  getAboutData() {
    return about;
  }

  /**
   * Default method to get different sections in 'services'.
   * @returns JSON Object
   */
  getServicesData() {
    return services;
  }

  /**
   * Default method to get different sections in 'FAQ'.
   * @returns JSON Object
   */
  getFAQData() {
    return faq;
  }
}
