import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { FormNoticesComponent } from "../form-notices/form-notices.component";
import { ListNoticesComponent } from "../list-notices/list-notices.component";
import { INotice } from '../../interfaces/inotice.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [FormNoticesComponent, ListNoticesComponent, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.css'
})
export class BlogComponent {
 @Input() listaNotices:INotice[]=[];

publicacionNoticia(event: INotice) {
  event.fecha = new Date();
  this.listaNotices.push(event);
  console.log(this.listaNotices)
}

}
