import { ChangeDetectorRef, Component, inject } from "@angular/core";
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
        <input type="text" placeholder="Filter by City" #filter />
        <button
          class="primary"
          type="button"
          (click)="filterResults(filter.value)"
        >
          Search
        </button>
      </form>
    </section>
    <section class="results">
      @for (housingLocation of filteredLocationList; track housingLocation.id) {
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
  changeDetectorRef = inject(ChangeDetectorRef);
  filteredLocationList: HousingLocationInfo[] = [];

  constructor() {
    this.housingService
      .getAllHousingLocations()
      .then((housingLocationList: HousingLocationInfo[]) => {
        this.housingLocationList = housingLocationList;
        this.changeDetectorRef.detectChanges();
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }
    this.filteredLocationList = this.housingLocationList.filter(
      (housingLocation) =>
        housingLocation.city.toLowerCase().includes(text.toLowerCase()),
    );
  }
}
