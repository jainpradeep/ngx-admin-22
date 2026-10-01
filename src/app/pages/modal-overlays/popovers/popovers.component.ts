import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatRipple } from "@angular/material/core";
import {
  NbButtonModule,
  NbCardModule,
  NbPopoverModule,
  NbTabsetModule,
} from "@nebular/theme";
import {
  NgxPopoverCardComponent,
  NgxPopoverFormComponent,
  NgxPopoverTabsComponent,
} from "./popover-examples.component";

@Component({
  selector: "ngx-popovers",
  styleUrls: ["./popovers.component.scss"],
  templateUrl: "./popovers.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NbCardModule,
    NbPopoverModule,
    NbTabsetModule,
    NbButtonModule,
    MatRipple,
  ],
})
export class PopoversComponent {
  tabsComponent = NgxPopoverTabsComponent;
  cardComponent = NgxPopoverCardComponent;
  formComponent = NgxPopoverFormComponent;
}
