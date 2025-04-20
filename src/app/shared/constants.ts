/**
 * Defines module prefix used in page URLs.
 */
export const routingModule = {
    HOME: "",
    PAGES: "page",
    BLOGS: "blog",
    PROJECTS: "project"
}

/**
 * Defines route endpoint names for page URLs.
 */
export const route = {
    BLANK: "",
    home: {
        HOME1: "index",
        HOME2: "index2",
        HOME3: "index3",
        HOME4: "index4",
    },
    pages: {
        ABOUT: "about",
        SERVICES: "services",
        FAQ: "faq",
        ERROR404: "error404",
        CONTACT: "contact"
    },
    blogs: {
        GRID: "grid",
        LIST: "list",
        MASONRY: "masonry",
        detail: {
            IMAGE: "image-blog",
            GALLERY: "blog-with-gallery",
            VIDEO: "video-blog",
            SIDEBAR: "blog-with-sidebar"
        }
    },
    projects: {
        GRID: "grid",
        MASONRY: "masonry",
        CAROUSEL: "carousel",
        CLASSIC1: "classic1",
        CLASSIC2: "classic2",
        DETAIL: "detail"
    }
}

/**
 * Combines 'page' module prefix with related endpoints.
 * @param _route endpoint name in URL.
 * @returns complete 'page' URL for navigation.
 */
export function pageUrl(_route: string) {
    return "/"+routingModule.PAGES+"/"+_route
}

/**
 * Combines 'blogs' module prefix with related endpoints.
 * @param _route endpoint name in URL.
 * @returns complete 'blogs' URL for navigation.
 */
export function blogsUrl(_route: string) {
    return "/"+routingModule.BLOGS+"/"+_route
}

/**
 * Combines 'projects' module prefix with related endpoints.
 * @param _route endpoint name in URL.
 * @returns complete 'projects' URL for navigation.
 */
export function projectsUrl(_route: string) {
    return "/"+routingModule.PROJECTS+"/"+_route
}