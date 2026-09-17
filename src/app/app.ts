import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  imports: [RouterModule],
  template: ` <main>
    <header class="brand-name">
      <img
        class="brand-logo"
        src="/public/logo.svg"
        alt="Logo"
        aria-hidden="true"
      />
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`,
  styleUrls: ["./app.css"],
})
export class App {
  title = "Home";
}
