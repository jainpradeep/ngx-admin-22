import { Component, ViewChild, ChangeDetectionStrategy } from "@angular/core";
import { MatRipple } from "@angular/material/core";
import {
  NbAccordionModule,
  NbButtonModule,
  NbCardModule,
} from "@nebular/theme";

@Component({
  selector: "ngx-accordion",
  templateUrl: "accordion.component.html",
  styleUrls: ["accordion.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, NbButtonModule, NbAccordionModule, MatRipple],
})
export class AccordionComponent {
  @ViewChild("item", { static: true }) accordion!: any;

  toggle() {
    this.accordion.toggle();
  }
}
