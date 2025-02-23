import { Component, Input, OnInit} from '@angular/core';
import { INotice } from '../../interfaces/inotice.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-notices',
  imports: [CommonModule],
  templateUrl: './list-notices.component.html',
  styleUrl: './list-notices.component.css'
})
export class ListNoticesComponent implements OnInit {

  @Input() listaNotices:INotice[]=[];

  noticias:INotice[]=[];

  ngOnInit():void{
    this.noticias=this.listaNotices
  }
}
