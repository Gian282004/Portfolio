import { Component } from '@angular/core';
import { LinkedinComponent } from '../../app/icons/linkedin/linkedin.component';
import { GithubComponent } from '../../app/icons/github/github.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [LinkedinComponent, GithubComponent],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

}
