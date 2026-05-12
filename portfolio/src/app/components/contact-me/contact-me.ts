import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import emailjs from '@emailjs/browser';

@Component({
  selector: 'app-contact-me',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css'
})
export class ContactMe implements OnInit {

  contactData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };

  sendStatus: 'idle' | 'sending' | 'success' | 'error' = 'idle';
  errorMessage = '';

  ngOnInit() {
    // INICIALIZAMOS CON TU PUBLIC KEY
    emailjs.init('bLCSUBdBPb70rHOPO'); 
  }

  onSubmit() {
    if (!this.contactData.name || !this.contactData.email || !this.contactData.subject || !this.contactData.message) {
      this.sendStatus = 'error';
      this.errorMessage = 'Todos los campos son requeridos';
      return;
    }

    this.sendStatus = 'sending';

    // AJUSTADO PARA COINCIDIR EXACTAMENTE CON LAS VARIABLES DE TU TEMPLATE
    const templateParams = {
      name: this.contactData.name,         // Conecta con {{name}}
      email: this.contactData.email,       // Conecta con {{email}}
      title: this.contactData.subject,     // Conecta con {{title}}
      message: this.contactData.message,   // Conecta con {{message}}
      to_email: 'ivothaielvicencio@gmail.com'
    };

    // ENVIAMOS USANDO TU SERVICE ID Y TEMPLATE ID
    emailjs.send('service_4kq4j07', 'template_fd4lwap', templateParams)
      .then(
        (response) => {
          console.log('Email enviado exitosamente:', response);
          this.sendStatus = 'success';
          this.contactData = { name: '', email: '', subject: '', message: '' };
          
          setTimeout(() => this.sendStatus = 'idle', 5000);
        },
        (error) => {
          console.error('Error al enviar email:', error);
          this.sendStatus = 'error';
          this.errorMessage = 'Error al enviar el mensaje. Por favor intenta nuevamente.';
          
          setTimeout(() => this.sendStatus = 'idle', 5000);
        }
      );
  }
}