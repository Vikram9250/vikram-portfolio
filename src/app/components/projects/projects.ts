import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.html',
  styleUrl: './projects.css',
})
export class Projects {
  showProjects = false;

  projects = [
    {
      title: 'Enterprise Banking Notification Microservice',
      description: 'A decoupled OTP and audit notification delivery microservice designed for high-throughput enterprise systems with robust error handling.',
      focus: 'OTP and audit notification delivery',
      challenge: 'Support high-throughput enterprise notification workflows.',
      outcome: 'A decoupled microservice design with robust error handling.',
      techStack: ['Java', 'Spring Boot', 'Spring Modulith', 'Apache Kafka', 'Docker', 'MySQL'],
      github: 'https://github.com/Vikram9250/replace-with-notification-service-repository',
      demo: 'https://example.com/replace-with-notification-service-demo'
    },
    {
      title: 'Cloud-Native Portfolio Backend',
      description: 'Scalable Java portfolio backend application deployed on OpenShift with customized MySQL database parameters and TLS passthrough routes.',
      focus: 'Cloud-native Java application deployment',
      challenge: 'Configure database parameters and secure application routing on OpenShift.',
      outcome: 'A containerized backend deployed with TLS passthrough routes.',
      techStack: ['Java', 'Spring Boot', 'OpenShift', 'Docker', 'MySQL', 'Kubernetes'],
      github: 'https://github.com/Vikram9250/replace-with-cloud-native-backend-repository',
      demo: 'https://example.com/replace-with-cloud-native-backend-demo'
    },
    {
      title: 'Automated BDD Regression Framework',
      description: 'Custom BDD testing and regression automation framework integrated with Selenium and web automation tools to streamline release validation.',
      focus: 'BDD-based browser regression testing',
      challenge: 'Streamline repeatable release validation through browser automation.',
      outcome: 'An automated regression framework integrated with Selenium and CI tools.',
      techStack: ['Java', 'Selenium', 'BDD', 'Jenkins', 'GitHub Actions'],
      github: 'https://github.com/Vikram9250/replace-with-bdd-framework-repository',
      demo: 'https://example.com/replace-with-bdd-framework-demo'
    }
  ];
}
