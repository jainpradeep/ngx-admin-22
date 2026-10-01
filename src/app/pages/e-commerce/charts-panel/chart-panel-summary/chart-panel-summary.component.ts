import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "ngx-chart-panel-summary",
  styleUrls: ["./chart-panel-summary.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  template: `
    <div class="summary-container">
      @for (item of summary; track $index) {
      <div>
        <div>{{ item.title }}</div>
        <div class="h6">{{ item.value }}</div>
      </div>
      }
    </div>
  `,
})
export class ChartPanelSummaryComponent {
  @Input() summary: { title: string; value: number }[] = [];
}
