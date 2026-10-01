import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NbCardModule } from "@nebular/theme";

@Component({
  selector: "ngx-grid",
  styleUrls: ["./grid.component.scss"],
  templateUrl: "./grid.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule],
})
export class GridComponent {}
