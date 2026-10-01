import { Component, ChangeDetectionStrategy } from "@angular/core";
import { GoogleMap, MapMarker } from "@angular/google-maps";
import { NbCardModule } from "@nebular/theme";

@Component({
  selector: "ngx-gmaps",
  styleUrls: ["./gmaps.component.scss"],
  templateUrl: "./gmaps.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, GoogleMap, MapMarker],
})
export class GmapsComponent {
  readonly position = { lat: 51.678418, lng: 7.809007 };
}
