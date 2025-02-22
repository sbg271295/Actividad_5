import { Component } from '@angular/core';
import { FormNoticesComponent } from "../form-notices/form-notices.component";
import { ListNoticesComponent } from "../list-notices/list-notices.component";

@Component({
  selector: 'app-blog',
  imports: [FormNoticesComponent, ListNoticesComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {

}
