import { Component, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { NbThemeService } from "@nebular/theme";
import { NgxChartsModule } from "@swimlane/ngx-charts";

@Component({
  selector: "ngx-d3-pie",
  template: `
    <ngx-charts-pie-chart
      [scheme]="colorScheme"
      [results]="results"
      [legend]="showLegend"
      [labels]="showLabels"
    >
    </ngx-charts-pie-chart>
  `,
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NgxChartsModule],
})
export class D3PieComponent implements OnDestroy {
  results = [
    { name: "Germany", value: 8940 },
    { name: "USA", value: 5000 },
    { name: "France", value: 7200 },
  ];
  showLegend = true;
  showLabels = true;
  colorScheme: any;
  themeSubscription: any;

  constructor(private theme: NbThemeService) {
    this.themeSubscription = this.theme.getJsTheme().subscribe((config) => {
      const colors: any = config.variables;
      this.colorScheme = {
        domain: [
          colors.primaryLight,
          colors.infoLight,
          colors.successLight,
          colors.warningLight,
          colors.dangerLight,
        ],
      };
    });
  }

  ngOnDestroy(): void {
    this.themeSubscription.unsubscribe();
  }
}
