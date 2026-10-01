import { Component, Input, ChangeDetectionStrategy } from "@angular/core";
import { MatRipple } from "@angular/material/core";
import { NbButtonModule, NbCardModule, NbDialogRef } from "@nebular/theme";

@Component({
  selector: "ngx-showcase-dialog",
  templateUrl: "showcase-dialog.component.html",
  styleUrls: ["showcase-dialog.component.scss"],
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, NbButtonModule, MatRipple],
})
export class ShowcaseDialogComponent {
  @Input() title!: string;

  constructor(protected ref: NbDialogRef<ShowcaseDialogComponent>) {}

  dismiss() {
    this.ref.close();
  }
}
