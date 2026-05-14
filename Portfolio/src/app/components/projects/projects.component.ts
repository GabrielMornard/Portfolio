import { Component } from '@angular/core';

export interface Project {
  titleKey: string;
  descriptionKey: string;
  image: string;
  alt: string;
  link: string;
  tags: string[];
  imageLeft: boolean;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
  standalone: false,
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      titleKey: 'projet.project1.title',
      descriptionKey: 'projet.project1.description',
      image: 'assets/images/taskApp.png',
      alt: 'Task Manager App screenshot',
      link: 'https://github.com/GabrielMornard',
      tags: ['Angular', 'TypeScript', '.NET', 'MSSQL'],
      imageLeft: false,
    },
    {
      titleKey: 'projet.project2.title',
      descriptionKey: 'projet.project2.description',
      image: 'assets/images/phone1.png',
      alt: 'Mobile App screenshot',
      link: 'https://github.com/GabrielMornard',
      tags: ['Java', 'Android', 'Firebase'],
      imageLeft: true,
    },
  ];
}
