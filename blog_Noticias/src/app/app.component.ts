import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormNoticesComponent } from "./components/form-notices/form-notices.component";
import { BlogComponent } from "./components/blog/blog.component";

@Component({
  selector: 'app-root',
  imports: [FormNoticesComponent, BlogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog_Noticias';
}
