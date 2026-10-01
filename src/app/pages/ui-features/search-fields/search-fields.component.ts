import { Component, ChangeDetectionStrategy } from "@angular/core";
import { MatRipple } from "@angular/material/core";
import { NbCardModule, NbSearchModule } from "@nebular/theme";

@Component({
  selector: "ngx-search-fields",
  templateUrl: "search-fields.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, NbSearchModule, MatRipple],
})
export class SearchComponent {}
