import { Component, Input, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { NbCardModule, NbThemeService } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import { TrafficBarChartComponent } from "./traffic-bar-chart.component";

@Component({
  selector: "ngx-traffic-back-card",
  styleUrls: ["./traffic-back-card.component.scss"],
  templateUrl: "./traffic-back-card.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, TrafficBarChartComponent],
})
export class TrafficBackCardComponent implements OnDestroy {
  private alive = true;

  @Input() trafficBarData: any;

  currentTheme!: string;

  constructor(private themeService: NbThemeService) {
    this.themeService
      .getJsTheme()
      .pipe(takeWhile(() => this.alive))
      .subscribe((theme) => {
        this.currentTheme = theme.name;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
