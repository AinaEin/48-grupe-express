import { PageTemplate } from "../lib/PageTemplate.js";
import { servicesData } from "../data/servicesData.js";

class PagesServiceTeam extends PageTemplate {
  serviceObj;

  constructor(params) {
    super();
    this.params = params;
    this.getServiceTeam();
  }

  main() {
    return `
            <main>
                <section class="container py-5">
                    <h1 class="display-5 fw-bold">${this.serviceObj.titleTeam}</h1>
                    <p class="col-md-8 fs-4">${this.serviceObj.projectText}</p>
                    <a href="${"#"}" class="btn btn-primary btn-lg">Projects</a>
                </section>
            </main>`;
  }

  getServiceTeam() {
    for (const service of servicesData) {
      if (service.id === this.params.serviceId) {
        this.serviceObj = service;
        break;
      }
    }
  }
}

export { PagesServiceTeam };
