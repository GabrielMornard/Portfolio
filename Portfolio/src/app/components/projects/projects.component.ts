import { Component } from '@angular/core';

export interface Project {
  titleKey: string;
  descriptionKey: string;
  image: string;
  alt: string;
  link: string;
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
      alt: 'Task App project screenshot',
      link: 'https://github.com/GabrielMornard',
      imageLeft: false,
    },
    {
      titleKey: 'projet.project2.title',
      descriptionKey: 'projet.project2.description',
      image: 'assets/images/phone1.png',
      alt: 'Mobile app project screenshot',
      link: 'https://github.com/GabrielMornard',
      imageLeft: true,
    },
  ];
}
