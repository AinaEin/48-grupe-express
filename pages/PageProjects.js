import { servicesData } from "../data/servicesData.js";
import { PageTemplate } from "../lib/PageTemplate.js";

class PageProjects extends PageTemplate {
  serviceObj = [];

  constructor(params) {
    super();
    this.params = params;
    this.getServiceTeam();
  }

  main() {
    let listHTML = "";

    for (const service of this.serviceObj.imageProject) {
        
        console.log({ service });


      listHTML += `
                <div class="col">
                    <div class="card shadow-sm">
                        <img class="card-img-top" style="height: 200px; object-fit: cover;" src="${service.imgSrc}" alt="Service image">
                        <div class="card-body">
                            <h3>${service.titleProject}</h3>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <div class="d-flex justify-content-between align-items-center">
                                <div class="btn-group">
                                    <a href="${service.hrefProjects}" class="btn btn-primary my-2">Read more</a>
                                </div>
                                <small class="text-body-secondary">9 mins</small>
                            </div>
                        </div>
                    </div>
                </div>`;
    }

    return `
            <main>
                <div class="album py-5 bg-body-tertiary">
                    <div class="container">
                        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            ${listHTML}
                        </div>
                    </div>
                </div>

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

export { PageProjects };