import { PageTemplate } from "../lib/PageTemplate.js";

class PageAbout extends PageTemplate {
    constructor() {
        super();
        this.title = 'About | Cepelinai';
  }
    main() {
    return `<main>ABOUT PAGE CONTENT</main>`;
  }
}

export { PageAbout };
