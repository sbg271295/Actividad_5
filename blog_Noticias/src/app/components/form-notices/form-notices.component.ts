import { Component, EventEmitter, Output } from '@angular/core';
import { INotice } from '../../interfaces/inotice.interface';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-notices',
  imports: [FormsModule],
  templateUrl: './form-notices.component.html',
  styleUrl: './form-notices.component.css'
})
export class FormNoticesComponent {

  newNotice:INotice={title:"", img: "",texto: "",fecha:new Date()}

  @Output() publicForm: EventEmitter<INotice> = new EventEmitter();

  publicar(){
    this.publicForm.emit(this.newNotice)
    this.newNotice={title:"", img: "",texto: "",fecha:new Date()}
  }
}
