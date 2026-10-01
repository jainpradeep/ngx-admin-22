import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatButtonToggleModule } from "@angular/material/button-toggle";

@Component({
  selector: "ngx-material-buttons",
  templateUrl: "./material-buttons.component.html",
  styleUrls: ["./material-buttons.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [MatButtonModule, MatButtonToggleModule],
})
export class MaterialButtonsComponent {}
