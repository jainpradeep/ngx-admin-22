import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { NgxLegendItemColor } from "./enum.legend-item-color";

@Component({
  selector: "ngx-legend-chart",
  styleUrls: ["./legend-chart.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: "./legend-chart.component.html",
})
export class ECommerceLegendChartComponent {
  /**
   * Take an array of legend items
   * Available iconColor: 'green', 'purple', 'light-purple', 'blue', 'yellow'
   * @type {{iconColor: string; title: string}[]}
   */
  @Input()
  legendItems: { iconColor: NgxLegendItemColor; title: string }[] = [];
}
