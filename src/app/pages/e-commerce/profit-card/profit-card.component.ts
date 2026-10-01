import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NbCardModule, NbIconModule } from "@nebular/theme";
import { StatsCardBackComponent } from "./back-side/stats-card-back.component";
import { StatsCardFrontComponent } from "./front-side/stats-card-front.component";

@Component({
  selector: "ngx-profit-card",
  styleUrls: ["./profit-card.component.scss"],
  templateUrl: "./profit-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    StatsCardFrontComponent,
    StatsCardBackComponent,
    NbCardModule,
    NbIconModule,
  ],
})
export class ProfitCardComponent {
  flipped = false;

  toggleView() {
    this.flipped = !this.flipped;
  }
}
