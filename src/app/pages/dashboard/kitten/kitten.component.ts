import { Component, OnDestroy, ChangeDetectionStrategy } from "@angular/core";
import { NbCardModule, NbIconModule, NbThemeService } from "@nebular/theme";

@Component({
  selector: "ngx-kitten",
  styleUrls: ["./kitten.component.scss"],
  templateUrl: "./kitten.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  imports: [NbCardModule, NbIconModule],
})
export class KittenComponent implements OnDestroy {
  currentTheme!: string;
  themeSubscription: any;

  constructor(private themeService: NbThemeService) {
    this.themeSubscription = this.themeService
      .getJsTheme()
      .subscribe((theme) => {
        this.currentTheme = theme.name;
      });
  }

  ngOnDestroy() {
    this.themeSubscription.unsubscribe();
  }
}
