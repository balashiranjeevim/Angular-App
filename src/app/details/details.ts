import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Housing } from "../housing";
import { HousingLocationInfo } from "../housinglocation";

@Component({
  imports: [],
  selector: "app-details",
  styleUrls: ["./details.css"],
  template: `
    <article>
      <img class="listing-photo" [src]="housingLocation?.photo" />
      <section>
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <article>
          <h2 class="section-heading">About this housing location</h2>
          <ul>
            <li>Units Available: {{ housingLocation?.availableUnits }}</li>
            <li>Does this location have wifi: {{ housingLocation?.wifi }}</li>
            <li>
              Does this location have laundry: {{ housingLocation?.laundry }}
            </li>
          </ul>
        </article>
      </section>
      <section class="listing-apply">
        <h2 class="section-heading">Apply to live here</h2>
        <button class="primary" type="button">Apply now</button>
      </section>
    </article>
  `,
})
export class Details {
  route = inject(ActivatedRoute);
  housingService = inject(Housing);

  housingLocation: HousingLocationInfo | undefined;
  housingLocationId = 0;

  constructor() {
    this.housingLocationId = Number(this.route.snapshot.params["id"]);
    this.housingLocation = this.housingService.getHousingLocationById(
      this.housingLocationId,
    );
  }
}
