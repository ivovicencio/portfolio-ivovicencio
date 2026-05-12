import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css'
})
export class ContactMe {

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendStatus: 'idle' | 'sending' | 'success' = 'idle';

  onSubmit() {
    this.sendStatus = 'sending';
    
    // Simulación de envío (Acá conectarías con EmailJS o Formspree)
    console.log('Iniciando transmisión de datos...', this.contactData);
    
    setTimeout(() => {
      this.sendStatus = 'success';
      // Reset del formulario después de enviar
      this.contactData = { name: '', email: '', subject: '', message: '' };
      
      // Volver al estado normal después de 5 segundos
      setTimeout(() => this.sendStatus = 'idle', 5000);
    }, 2000);
  }
}