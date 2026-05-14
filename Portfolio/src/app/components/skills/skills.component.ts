import { Component } from '@angular/core';

export interface Skill {
  name: string;
  image: string;
  alt: string;
}

export interface SkillGroup {
  titleKey: string;
  skills: Skill[];
}

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css',
  standalone: false,
})
export class SkillsComponent {
  allGroups: SkillGroup[] = [
    {
      titleKey: 'Skills.Frontend',
      skills: [
        { name: 'TypeScript', image: 'assets/images/typescript.png',    alt: 'TypeScript' },
        { name: 'Angular',    image: 'assets/images/angular.png',       alt: 'Angular' },
        { name: 'HTML',       image: 'assets/images/html.png',          alt: 'HTML' },
        { name: 'CSS',        image: 'assets/images/css-3.png',         alt: 'CSS' },
        { name: 'Bootstrap',  image: 'assets/images/icons8-bootstrap-144.png', alt: 'Bootstrap' },
      ],
    },
    {
      titleKey: 'Skills.Backend',
      skills: [
        { name: 'C#',          image: 'assets/images/c-sharp.png',                alt: 'C#' },
        { name: 'Dotnet',      image: 'assets/images/NET core.png',               alt: 'Dotnet' },
        { name: 'Spring Boot', image: 'assets/images/icons8-spring-boot-144.png', alt: 'Spring Boot' },
        { name: 'Firebase',    image: 'assets/images/Firebase.png',               alt: 'Firebase' },
      ],
    },
    {
      titleKey: 'Skills.BD',
      skills: [
        { name: 'MSSQL',  image: 'assets/images/icons8-sql-50.png', alt: 'MSSQL' },
        { name: 'SQLite', image: 'assets/images/SQLite.png',         alt: 'SQLite' },
      ],
    },
    {
      titleKey: 'Skills.Mobile',
      skills: [
        { name: 'Java',    image: 'assets/images/icons8-java-144.png',    alt: 'Java' },
        { name: 'Flutter', image: 'assets/images/icons8-flutter-144.png', alt: 'Flutter' },
        { name: 'Dart',    image: 'assets/images/icons8-dart-144.png',    alt: 'Dart' },
      ],
    },
    {
      titleKey: 'Skills.IDE',
      skills: [
        { name: 'VS Code',        image: 'assets/images/icons8-vs-code-144.png',       alt: 'VS Code' },
        { name: 'Visual Studio',  image: 'assets/images/icons8-visual-studio-144.png', alt: 'Visual Studio' },
        { name: 'Android Studio', image: 'assets/images/icons8-android-os-144.png',    alt: 'Android Studio' },
        { name: 'IntelliJ',       image: 'assets/images/intellij-idea.svg',             alt: 'IntelliJ' },
        { name: 'Docker',         image: 'assets/images/docker.png',                    alt: 'Docker' },
      ],
    },
    {
      titleKey: 'Skills.Tools',
      skills: [
        { name: 'GitHub',  image: 'assets/images/icons8-github-120.png',    alt: 'GitHub' },
        { name: 'Figma',   image: 'assets/images/icons8-figma-144.png',     alt: 'Figma' },
        { name: 'Linux',   image: 'assets/images/linux.png',                alt: 'Linux' },
        { name: 'Azure',   image: 'assets/images/icons8-azur-144.png',      alt: 'Azure' },
        { name: 'Postman', image: 'assets/images/postman.svg',              alt: 'Postman' },
      ],
    },
  ];
}
