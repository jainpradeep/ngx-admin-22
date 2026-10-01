import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NbAlertModule, NbCardModule } from "@nebular/theme";

@Component({
  selector: "ngx-alert",
  templateUrl: "alert.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, NbAlertModule],
})
export class AlertComponent {}
