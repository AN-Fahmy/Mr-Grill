import { Injectable } from '@angular/core';
import { home1, home2, home3, home4 } from '@shared/data/content.json';

/**
 * Defines an intermediate layer to collect 'home-pages' data
 * (rendered as JSON)
 */
@Injectable({
  providedIn: 'root'
})
export class HomeService {

  /**
   * Default constructor
   */
  constructor() { }

  /**
   * Default method to get different sections in 'home1'.
   * @returns JSON Object
   */
  getHome1Data() {
    return home1;
  }

  /**
   * Default method to get different sections in 'home2'.
   * @returns JSON Object
   */
  getHome2Data() {
    return home2;
  }

  /**
   * Default method to get different sections in 'home3'.
   * @returns JSON Object
   */
  getHome3Data() {
    return home3;
  }

  /**
   * Default method to get different sections in 'home4'.
   * @returns JSON Object
   */
  getHome4Data() {
    return home4;
  }
}
