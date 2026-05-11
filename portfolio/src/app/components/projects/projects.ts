import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Project {
  title: string;
  category: 'frontend' | 'backend' | 'fullstack';
  description: string;
  history: string;
  tech: string[];
  status: 'completed' | 'in-progress';
  link: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css'
})
export class ProjectsComponent {
  
  activeFilter: string = 'all';
  selectedProject: Project | null = null;
  isModalOpen: boolean = false;

  projects: Project[] = [
    {
      title: 'ServiceGo',
      category: 'fullstack',
      description: 'Marketplace de servicios técnicos con geolocalización y gestión de turnos.',
      history: 'La idea nació para conectar técnicos de oficios con usuarios que necesitan soluciones rápidas. El mayor desafío fue estructurar la base de datos en MongoDB para la geolocalización.',
      tech: ['Angular', 'Node.js', 'MongoDB', 'Bootstrap'],
      status: 'completed',
      link: '#'
    },
    {
      title: 'Del Rey E-commerce',
      category: 'fullstack',
      description: 'Catálogo dinámico y sistema de ventas para tienda de calzado regional.',
      history: 'Un proyecto familiar clave. Digitalizamos el inventario físico y armamos un catálogo que permite gestionar stock y consultas de manera intuitiva.',
      tech: ['Angular', 'C#', 'SQL Server', 'CSS3'],
      status: 'in-progress',
      link: '#'
    },
    {
      title: 'Sistema Fundación',
      category: 'fullstack',
      description: 'Plataforma integral para la gestión de donaciones y programas sociales.',
      history: 'Desarrollo enfocado en la transparencia y facilidad de uso para los administradores de la fundación.',
      tech: ['React', 'Node.js', 'PostgreSQL'],
      status: 'in-progress',
      link: '#'
    },
    {
      title: 'Core API Rest',
      category: 'backend',
      description: 'Microservicio de autenticación y gestión de usuarios escalable.',
      history: 'Práctica intensiva de arquitectura backend. Implementé seguridad con JWT y despliegue en contenedores.',
      tech: ['Java', 'Spring Boot', 'JWT', 'Docker'],
      status: 'completed',
      link: '#'
    },
    {
      title: 'SoySí Residencia',
      category: 'frontend',
      description: 'Panel de administración visual para la gestión de residencias estudiantiles.',
      history: 'Uno de mis primeros grandes retos en UI/UX. Logré transformar un sistema complejo en un panel limpio y fácil de operar para los dueños.',
      tech: ['Angular', 'TypeScript', 'Tailwind'],
      status: 'completed',
      link: '#'
    }
  ];

  // El getter asegura que Angular re-renderice cuando cambia el filtro
  get filteredProjects() {
    if (this.activeFilter === 'all') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === this.activeFilter);
  }

  setFilter(filter: string) {
    this.activeFilter = filter;
  }

  openModal(project: Project) {
    this.selectedProject = project;
    this.isModalOpen = true;
    document.body.style.overflow = 'hidden';
  }

  closeModal() {
    this.isModalOpen = false;
    this.selectedProject = null;
    document.body.style.overflow = 'auto';
  }
}