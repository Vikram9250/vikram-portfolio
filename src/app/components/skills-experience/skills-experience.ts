import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-skills-experience',
  imports: [CommonModule],
  templateUrl: './skills-experience.html',
  styleUrl: './skills-experience.css',
})
export class SkillsExperience {
  skillCategories = [
    {
      title: 'Languages & Core',
      skills: [
        { name: 'Java', iconClass: 'devicon-java-plain' },
        { name: 'SQL', symbol: 'database' },
        { name: 'TypeScript', iconClass: 'devicon-typescript-plain' },
        { name: 'OOP', symbol: 'objects' },
        { name: 'Design Patterns', symbol: 'patterns' },
      ],
    },
    {
      title: 'Frameworks',
      skills: [
        { name: 'Spring Boot', iconClass: 'devicon-spring-original' },
        { name: 'Spring MVC', iconClass: 'devicon-spring-original' },
        { name: 'Spring Data JPA', iconClass: 'devicon-spring-original' },
        { name: 'Spring Security', iconClass: 'devicon-spring-original' },
        { name: 'Hibernate', iconClass: 'devicon-hibernate-plain' },
        { name: 'Angular', iconClass: 'devicon-angular-plain' },
      ],
    },
    {
      title: 'Architecture & APIs',
      skills: [
        { name: 'Microservices', symbol: 'network' },
        { name: 'REST APIs', iconClass: 'devicon-openapi-plain' },
        { name: 'Apache Kafka', iconClass: 'devicon-apachekafka-original' },
        { name: 'Spring Cloud', iconClass: 'devicon-spring-original' },
      ],
    },
    {
      title: 'Databases',
      skills: [
        { name: 'Oracle', iconClass: 'devicon-oracle-original' },
        { name: 'MySQL', iconClass: 'devicon-mysql-original' },
        { name: 'MongoDB', iconClass: 'devicon-mongodb-plain' },
      ],
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', iconClass: 'devicon-docker-plain' },
        { name: 'OpenShift', iconClass: 'devicon-redhat-plain' },
        { name: 'Kubernetes', iconClass: 'devicon-kubernetes-plain' },
        { name: 'Helm', iconClass: 'devicon-helm-original' },
        { name: 'Jenkins', iconClass: 'devicon-jenkins-line' },
        { name: 'GitHub Actions', iconClass: 'devicon-githubactions-plain' },
        { name: 'AWS', iconClass: 'devicon-amazonwebservices-plain' },
      ],
    },
    {
      title: 'Testing & Tools',
      skills: [
        { name: 'JUnit', iconClass: 'devicon-junit-plain' },
        { name: 'Selenium', iconClass: 'devicon-selenium-plain' },
        { name: 'BDD Automation', iconClass: 'devicon-cucumber-plain' },
        { name: 'Postman / Bruno', iconClass: 'devicon-postman-plain' },
        { name: 'GitHub Copilot', symbol: 'sparkles' },
        { name: 'Jira', iconClass: 'devicon-jira-plain' },
      ],
    },
  ];

  experiences = [
    {
      period: 'Jul 2026 – Present',
      role: 'I.T. Analyst C2',
      company: 'Tata Consultancy Services',
      location: 'Hyderabad, Telangana',
      project: 'Bank of America · Global Technology · ITGPST',
      bullets: [
        'Upgraded enterprise middleware applications from Java 17 to Java 25 and Spring Boot 4.1.1, updating build configurations and dependencies.',
        'Migrated legacy applications from Spring Boot 1.x to 4.x, refactoring code for current compatible versions.',
        'Implemented OAuth2 security using Spring Security Resource Server, token introspection, and the client credentials grant.',
        'Migrated container base images to Java 25 Hummingbird, remediating vulnerabilities and strengthening deployment security.',
        'Used GitHub Copilot to develop JUnit tests, raising unit test coverage from 0% to over 90%.',
        'Maintained shared enterprise services for audit logging, email notifications, and user profile management.',
      ],
    },
    {
      period: 'Feb 2022 – Jun 2026',
      role: 'Technology Analyst',
      company: 'Infosys Limited',
      location: 'Hyderabad, Telangana',
      project: 'Wells Fargo · Consumer Technology · HLT',
      bullets: [
        'Migrated projects from GitHub on-premises to GitHub SaaS, moved CI/CD from Jenkins to GitHub Actions, and transitioned hosting from PCF to OpenShift.',
        'Deployed applications to OpenShift using a dedicated CD repository and Helm-style configuration.',
        'Designed secure REST APIs for communication between microservices and external systems with standardized error handling.',
        'Applied microservice decomposition and resilience patterns—including circuit breakers, retries, and timeouts—with Spring Cloud.',
        'Automated Docker image creation and versioning in Artifactory using GitHub Actions pipelines.',
        'Created Selenium-based BDD regression automation to reduce manual release validation effort.',
      ],
    },
  ];
}
