import { Component, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { StatsBarData } from "@app/core/data/stats-bar";
import { NbCardModule } from "@nebular/theme";
import { takeWhile } from "rxjs/operators";
import { StatsAreaChartComponent } from "./stats-area-chart.component";

@Component({
  selector: "ngx-stats-card-back",
  styleUrls: ["./stats-card-back.component.scss"],
  templateUrl: "./stats-card-back.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [StatsAreaChartComponent, NbCardModule],
})
export class StatsCardBackComponent implements OnDestroy {
  private alive = true;

  chartData: number[] = [];

  constructor(private statsBarData: StatsBarData) {
    this.statsBarData
      .getStatsBarData()
      .pipe(takeWhile(() => this.alive))
      .subscribe((data) => {
        this.chartData = data;
      });
  }

  ngOnDestroy() {
    this.alive = false;
  }
}
