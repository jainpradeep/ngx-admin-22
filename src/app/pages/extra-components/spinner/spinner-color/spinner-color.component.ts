import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NbCardModule, NbSpinnerModule } from "@nebular/theme";

@Component({
  selector: "ngx-spinner-color",
  templateUrl: "spinner-color.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, NbSpinnerModule],
})
export class SpinnerColorComponent {}
