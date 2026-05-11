import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface TechItem {
  name: string;
  logo: string;
  angle: number;
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

  // 6 Lenguajes: 360 / 6 = 60 grados de separación exacta
  technologies: TechItem[] = [
    { name: 'Angular', logo: 'assets/angular-logo.png', angle: 0 },
    { name: 'React', logo: 'assets/react-logo.png', angle: 60 },
    { name: 'Node.js', logo: 'assets/nodejs-logo.png', angle: 120 },
    { name: 'Java', logo: 'assets/java-logo.png', angle: 180 },
    { name: 'JavaScript', logo: 'assets/js-logo.png', angle: 240 },
    { name: 'C#', logo: 'assets/c%23-logo.png', angle: 300 },
  ];

  selectTech(index: number) {
    this.selectedTechIndex = index;
    const selectedTech = this.technologies[index];

    // En nuestra perspectiva 3D, 90 grados es la posición de "al frente y abajo"
    let targetRotation = 90 - selectedTech.angle;
    
    // Lógica matemática para que el círculo gire por el camino más corto
    const currentMod = this.systemRotation % 360;
    const diff = targetRotation - currentMod;
    
    if (diff > 180) targetRotation -= 360;
    else if (diff < -180) targetRotation += 360;

    // Acumulamos la rotación para que la transición CSS sea fluida
    this.systemRotation += (targetRotation - currentMod);
  }
}