import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { InMemoryScrollingFeature, InMemoryScrollingOptions, provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';

/**
 * Configuration options for the scrolling feature 
 * which can be used with withInMemoryScrolling function.
 */
const scrollConfig: InMemoryScrollingOptions = {
  scrollPositionRestoration: 'top',
  anchorScrolling: 'enabled'
}

/**
 * Initializing scroll config.
 * 
 * Enables customizable scrolling behavior for router navigations.
 */
const inMemoryScrollingFeature: InMemoryScrollingFeature = withInMemoryScrolling(scrollConfig);

/**
 * Set of config options available during the application bootstrap operation
 */
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes, inMemoryScrollingFeature)
  ]
};
