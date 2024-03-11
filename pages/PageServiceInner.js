import { servicesData } from "../data/servicesData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageServiceInner extends PageTemplate {
  constructor(params) {
    super();
    this.pageTitle = "Service";
    this.page = "services";
    this.params = params;
  }

  main() {
    let serviceObj = null;

    for (const service of servicesData) {
      if (service.id === this.params.serviceId) {
        serviceObj = service;
        break;
      }
    }

    if (serviceObj === null) {
      return `
                <main>
                    <section class="container py-5">
                        <h1 class="display-5 fw-bold">Service not found</h1>
                        <a href="/services" class="btn btn-primary btn-lg">Go to services list</a>
                    </section>
                </main>`;
    }

    return `
            <main>
                <section class="container py-5">
                    <h1 class="display-5 fw-bold">${serviceObj.title} page</h1>
                    <p class="col-md-8 fs-4">${serviceObj.promoText}</p>
                    <a href="${serviceObj.hrefTeam}" class="btn btn-primary btn-lg">${serviceObj.titleTeam}</a>
                </section>
                <section class="container">
                    <div class="row align-items-md-stretch">
                        <div class="col-md-6">
                            <div class="h-100 p-5 text-bg-dark rounded-3">
                            <h2>Change the background</h2>
                            <p>Swap the background-color utility and add a \`.text -* \` color utility to mix up the jumbotron look. Then, mix and match with additional component themes and more.</p>
                            <button class="btn btn-outline-light" type="button">Example</button>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="h-100 p-5 bg-body-tertiary border rounded-3">
                            <h2>Add borders</h2>
                            <p>Or, keep it light and add a border for some added definition to the boundaries of your content. Be sure to look under the hood at the source HTML here as we've adjusted the alignment and sizing of both column's content for equal-height.</p>
                            <button class="btn btn-outline-secondary" type="button">Example</button>
                            </div>
                        </div>
                    </div>
                </section>
            </main>`;
  }
}

export { PageServiceInner };
