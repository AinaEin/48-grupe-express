import { PageTemplate } from "../lib/PageTemplate.js";

class Page404 extends PageTemplate {
    constructor() {
        super();
        this.title = '404 | Cepelinai';
    }
  main() {
    return `<main>404 PAGE CONTENT</main>`;
  }
}

export { Page404 };