import { Component, Input, ChangeDetectionStrategy } from "@angular/core";

import { NewsPost } from "../../news.service";

@Component({
  selector: "ngx-news-post",
  changeDetection: ChangeDetectionStrategy.Eager,
  templateUrl: "news-post.component.html",
})
export class NewsPostComponent {
  @Input() post!: NewsPost;
}
