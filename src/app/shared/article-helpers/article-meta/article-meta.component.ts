import { Component, Input } from '@angular/core';
import { Article } from '../../../core/models/article.model';
import { RouterLink } from "@angular/router";
import { DatePipe } from "@angular/common";

@Component({
  selector: 'app-article-meta',
  templateUrl: './article-meta.component.html',
  styleUrls: ['./article-meta.component.css'],
  imports: [RouterLink, DatePipe],
  standalone: true,
})
export class ArticleMetaComponent {
  @Input() article!: Article;
}
