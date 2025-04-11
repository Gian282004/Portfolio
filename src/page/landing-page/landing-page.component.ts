import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AboutMeComponent } from '../../components/about-me/about-me.component';
import { ProjectsComponent } from '../../app/components/projects/projects.component';
import { EducationComponent } from '../../app/components/education/education.component';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, AboutMeComponent, ProjectsComponent, EducationComponent],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {

}
