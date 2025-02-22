import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormNoticesComponent } from "./components/form-notices/form-notices.component";
import { BlogComponent } from "./components/blog/blog.component";
import { INotice } from './interfaces/inotice.interface';
import { FormsModule } from '@angular/forms';
import { ListNoticesComponent } from './components/list-notices/list-notices.component';

@Component({
  selector: 'app-root',
  imports: [BlogComponent,FormsModule,ListNoticesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'blog_Noticias';

  arrayNotices: INotice[] = [
    {
      title: 'El Impacto de la Inteligencia Artificial en 2025',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'La inteligencia artificial sigue transformando industrias en 2025, con avances significativos en automatización, salud y entretenimiento.',
      categoria: 'Tecnología',
      fecha: new Date('2025-02-10')
    },
    {
      title: 'Descubre las Mejores Rutas de Senderismo en Primavera',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Desde los Pirineos hasta la Sierra Nevada, te mostramos los caminos más impresionantes para disfrutar de la naturaleza.',
      categoria: 'Aventura',
      fecha: new Date('2025-03-01')
    },
    {
      title: 'Nuevas Tendencias en la Cocina Vegana',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Los chefs reinventan la cocina vegana con ingredientes locales y recetas innovadoras que conquistan hasta a los carnívoros.',
      categoria: 'Gastronomía',
      fecha: new Date('2025-01-15')
    },
    {
      title: 'El Festival de Música Electrónica Más Grande del Año',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Miles de personas se reúnen para disfrutar de los mejores DJs del mundo en un espectáculo inolvidable.',
      categoria: 'Entretenimiento',
      fecha: new Date('2025-04-20')
    },
    {
      title: '¿Cómo Prepararse para una Entrevista de Trabajo en 2025?',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Consejos y trucos para destacar en un mercado laboral cada vez más competitivo.',
      categoria: 'Negocios',
      fecha: new Date('2025-02-28')
    },
    {
      title: 'Tecnología Verde: Innovaciones para un Futuro Sostenible',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Conoce las últimas innovaciones tecnológicas que buscan reducir la huella de carbono y proteger el medio ambiente.',
      categoria: 'Sostenibilidad',
      fecha: new Date('2025-05-05')
    },
    {
      title: 'Guía para Ahorrar Dinero al Viajar',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Descubre trucos y estrategias para disfrutar de tus vacaciones sin gastar de más.',
      categoria: 'Viajes',
      fecha: new Date('2025-06-01')
    },
    {
      title: 'El Regreso de las Películas de Ciencia Ficción',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Nuevos estrenos prometen llevarnos a mundos distantes y explorar lo desconocido.',
      categoria: 'Cine',
      fecha: new Date('2025-07-10')
    },
    {
      title: 'Cómo Mantenerse Activo en la Oficina',
      img: 'https://placehold.co/600x400/EEE/31343C',
      texto: 'Ejercicios sencillos y hábitos saludables para evitar el sedentarismo en el trabajo.',
      categoria: 'Salud',
      fecha: new Date('2025-08-12')
    }
  ];

}
