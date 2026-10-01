import { Component, HostBinding, ChangeDetectionStrategy } from "@angular/core";

@Component({
  selector: "ngx-news-post-placeholder",
  templateUrl: "news-post-placeholder.component.html",
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrls: ["news-post-placeholder.component.scss"],
})
export class NewsPostPlaceholderComponent {
  @HostBinding("attr.aria-label")
  label = "Loading";
}
