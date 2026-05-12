import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  logo: string;
  angle: number;
  level: number; // Porcentaje de maestría
  description: string; // Breve info de la habilidad
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class HomeComponent {
  systemRotation = 0;
  selectedTechIndex = -1;
  isProfileOpen = false;
  isSkillOpen = false; // Estado para la carta de habilidad
  selectedTech: TechItem | null = null;

  technologies: TechItem[] = [
    { name: 'Angular', logo: 'assets/angular-logo.png', angle: 0, level: 90, description: 'Maestría en arquitectura de componentes y estado complejo.' },
    { name: 'React', logo: 'assets/react-logo.png', angle: 51, level: 75, description: 'Desarrollo de interfaces reactivas y hooks personalizados.' },
    { name: 'Node.js', logo: 'assets/nodejs-logo.png', angle: 103, level: 80, description: 'Construcción de APIs escalables y microservicios.' },
    { name: 'Java', logo: 'assets/java-logo.png', angle: 154, level: 85, description: 'Dominio de POO y frameworks robustos como Spring.' },
    { name: 'JavaScript', logo: 'assets/js-logo.png', angle: 206, level: 95, description: 'Conocimiento profundo del núcleo del lenguaje y ES6+.' },
    { name: 'Docker', logo: 'assets/docker-logo.png', angle: 257, level: 70, description: 'Contenerización y despliegue de entornos aislados.' },
    { name: 'Linux', logo: 'assets/linux-logo.png', angle: 309, level: 85, description: 'Administración de sistemas y optimización vía terminal.' }
  ];

  selectTech(index: number) {
    this.selectedTechIndex = index;
    this.selectedTech = this.technologies[index];
    this.isSkillOpen = true; // Abre la carta al tocar

    let targetRotation = 90 - this.selectedTech.angle;
    const currentMod = this.systemRotation % 360;
    const diff = targetRotation - currentMod;
    if (diff > 180) targetRotation -= 360;
    else if (diff < -180) targetRotation += 360;
    this.systemRotation += (targetRotation - currentMod);
  }

  toggleProfile() {
    this.isProfileOpen = !this.isProfileOpen;
    if(this.isProfileOpen) this.isSkillOpen = false;
  }

  closeSkill() {
    this.isSkillOpen = false;
  }

  downloadCV() {
    const link = document.createElement('a');
    link.href = 'assets/CV_IVO_VICENCIO.pdf'; 
    link.download = 'CV_IVO_VICENCIO.pdf';
    link.click();
  }
}