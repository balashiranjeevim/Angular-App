import { Component, inject } from "@angular/core";
import { HousingLocation } from "../housing-location/housing-location";
import { HousingLocationInfo } from "../housinglocation";
import { Housing } from "../housing";

@Component({
  imports: [HousingLocation],
  selector: "app-home",
  styleUrls: ["./home.css"],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of housingLocationList; track housingLocation.id) {
        <app-housing-location
          [housingLocation]="housingLocation"
        ></app-housing-location>
      }
    </section>
  `,
})
export class Home {
  housingLocationList: HousingLocationInfo[] = [];
  housingService = inject(Housing);

  constructor() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
