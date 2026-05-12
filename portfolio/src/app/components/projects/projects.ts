import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // Necesario para el buscador

interface Project {
  title: string;
  category: 'frontend' | 'backend' | 'fullstack';
  description: string;
  history?: string;
  tech: string[];
  status: 'completed' | 'in-progress';
  repoFront?: string;
  repoBack?: string;
  deployUrl?: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  
  activeFilter: string = 'all';
  searchTerm: string = '';
  selectedProject: Project | null = null;
  isModalOpen: boolean = false;


  projects: Project[] = [
    {
      title: 'DentalTurnos',
      category: 'fullstack',
      description: 'Sistema integral de gestión de turnos e historias clínicas para consultorios odontológicos.',
      history: 'Desarrollado para optimizar la agenda de los profesionales y digitalizar el historial de los pacientes. El mayor reto fue el manejo de horarios superpuestos.',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap'],
      status: 'completed',
      repoFront: 'https://github.com/GabrielIturreCs/Registrar-Turno-Sistema-Clinico',
      repoBack: 'https://github.com/GabrielIturreCs/SistemaConsultorioBackend',
      deployUrl: 'https://registrar-turno-sistema-clinico.onrender.com/'
    },
    {
      title: 'Del Rey E-commerce',
      category: 'fullstack',
      description: 'Catálogo dinámico y sistema de ventas para tienda de calzado regional.',
      history: 'Un proyecto familiar clave. Digitalizamos el inventario físico y armamos un catálogo intuitivo.',
      tech: ['Angular', 'Node.js', 'PostgreSQL', 'Docker'],
      status: 'in-progress',
      repoFront: 'https://github.com/ivovicencio/Ecommerce-DelRey',
      repoBack: 'https://github.com/ivovicencio/Ecommerce-DelRey-backend'
    },
    {
      title: 'Gestión de Paquetería',
      category: 'backend',
      description: 'Microservicio de autenticación y gestión de envío y recepción de paquetes.',
      history: 'Práctica intensiva de arquitectura backend. Implementé seguridad con JWT y despliegue en contenedores en un proyecto colaborativo para la facultad.',
      tech: ['Java', 'Spring Boot', 'JWT'],
      status: 'completed',
      repoBack: 'https://gitlab.com/ivothaiel/poo2025-grupo15'
    },
    {
      title: 'SoySí Residencia',
      category: 'fullstack',
      description: 'Panel de administración visual para la gestión de residencias estudiantiles.',
      history: 'Desarrollo integral para mejorar la gestión interna de la fundación sí.',
      tech: ['Angular', 'TypeScript', 'Bootstrap', 'JAVA', 'Spring Boot', 'PostgreSQL', 'JWT'],
      status: 'in-progress',
      repoFront: 'https://github.com/ivovicencio/SoySi-Front',
      repoBack: 'https://github.com/ivovicencio/SoySi-Back'
    },
    {
      title: 'Olympo GYM',
      category: 'frontend',
      description: 'Proyecto de gimnasio con sistema de gestión de membresías.',
      history: 'Logré transformar un sistema complejo en un panel limpio y fácil de operar para los dueños.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      status: 'completed',
      repoFront: 'https://github.com/ivothaiel/OlimpoGym-TP1',
      deployUrl: 'https://ivothaiel.github.io/OlimpoGym-TP1/'
    }
  ];

  // LÓGICA DE FILTRADO Y BÚSQUEDA REAL
  get filteredProjects() {
    return this.projects.filter(p => {
      const matchesFilter = this.activeFilter === 'all' || p.category === this.activeFilter;
      const matchesSearch = p.title.toLowerCase().includes(this.searchTerm.toLowerCase()) || 
                            p.tech.some(t => t.toLowerCase().includes(this.searchTerm.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  openModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden'; // Bloquea el scroll de fondo
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto'; // Libera el scroll
  }
}