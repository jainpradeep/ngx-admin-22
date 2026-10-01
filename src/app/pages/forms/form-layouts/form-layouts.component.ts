import { Component, ChangeDetectionStrategy } from "@angular/core";
import {
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbInputModule,
  NbRadioModule,
} from "@nebular/theme";

@Component({
  selector: "ngx-form-layouts",
  styleUrls: ["./form-layouts.component.scss"],
  templateUrl: "./form-layouts.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    NbCardModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
    NbRadioModule,
  ],
})
export class FormLayoutsComponent {}
