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

  newNotice:INotice={title:"", img: "",texto: "",categoria:"",fecha:new Date()}

  @Output() publicForm: EventEmitter<INotice> = new EventEmitter();

  publicar(){
    if (!this.newNotice.title.trim() || !this.newNotice.img.trim() || !this.newNotice.texto.trim()|| !this.newNotice.categoria.trim()) {
      alert('⚠️ Debes rellenar todos los campos antes de publicar.');
    }else{
      alert('Noticia publicada')
      this.publicForm.emit(this.newNotice)
      this.newNotice={title:"", img: "",texto: "",categoria:"",fecha:new Date()}
  }
  }
}
