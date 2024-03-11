import { PageTemplate } from "../lib/PageTemplate.js";

class PagesServiceTeam extends PageTemplate {
  constructor() {
    super();
    this.pageTitle = 'Design Team';
  }

  main() {
    return `
            <main>
                <section class="container py-5">
                    <h1 class="display-5 fw-bold">${this.pageTitle} page</h1>
                    <p class="col-md-8 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
                    <a href="${"#"}" class="btn btn-primary btn-lg">Design team</a>
                </section>
            </main>`;
  }
}

export { PagesServiceTeam };
