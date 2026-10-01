import { Component, ChangeDetectionStrategy } from "@angular/core";
import { NbCardModule, NbSpinnerModule, NbTabsetModule } from "@nebular/theme";

@Component({
  selector: "ngx-spinner-in-tabs",
  templateUrl: "spinner-in-tabs.component.html",
  styleUrls: ["spinner-in-tabs.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, NbTabsetModule, NbSpinnerModule],
})
export class SpinnerInTabsComponent {
  loading = false;

  toggleLoadingAnimation() {
    this.loading = true;
    setTimeout(() => (this.loading = false), 1000);
  }
}
