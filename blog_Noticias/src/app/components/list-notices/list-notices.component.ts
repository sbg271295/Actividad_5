import { Component, Input } from '@angular/core';
import { INotice } from '../../interfaces/inotice.interface';

@Component({
  selector: 'app-list-notices',
  imports: [],
  templateUrl: './list-notices.component.html',
  styleUrl: './list-notices.component.css'
})
export class ListNoticesComponent {
  @Input() misNotices:INotice[]=[];

  noticias:INotice[]=[];

  ngOnInit(){
    this.noticias=this.misNotices
  }

}
