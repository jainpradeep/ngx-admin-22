import { AsyncPipe } from "@angular/common";
import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatRipple } from "@angular/material/core";
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbComponentShape,
  NbComponentSize,
  NbComponentStatus,
  NbIconModule,
  NbThemeService,
  NbUserModule,
} from "@nebular/theme";
import { map, Observable } from "rxjs";
import { MaterialButtonsComponent } from "./material-buttons/material-buttons.component";

@Component({
  selector: "ngx-buttons",
  styleUrls: ["./buttons.component.scss"],
  templateUrl: "./buttons.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [
    MaterialButtonsComponent,
    NbCardModule,
    NbActionsModule,
    NbUserModule,
    NbIconModule,
    NbButtonModule,
    MatRipple,
    AsyncPipe,
  ],
})
export class ButtonsComponent {
  statuses: NbComponentStatus[] = [
    "primary",
    "success",
    "info",
    "warning",
    "danger",
  ];
  shapes: NbComponentShape[] = ["rectangle", "semi-round", "round"];
  sizes: NbComponentSize[] = ["tiny", "small", "medium", "large", "giant"];
  materialTheme$: Observable<boolean>;

  constructor(private readonly themeService: NbThemeService) {
    this.materialTheme$ = this.themeService.onThemeChange().pipe(
      map((theme) => {
        const themeName: string = theme?.name || "";
        return themeName.startsWith("material");
      })
    );
  }
}
