import { Component, EventEmitter, Input, Output } from '@angular/core';
import { INotice } from '../../interfaces/inotice.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-notices',
  imports: [CommonModule],
  templateUrl: './list-notices.component.html',
  styleUrl: './list-notices.component.css'
})
export class ListNoticesComponent {
  @Input() misNotices:INotice[]=[];

  noticias:INotice[]=[];

  ngOnInit():void{
    this.noticias=this.misNotices
  }

}
