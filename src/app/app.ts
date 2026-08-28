import { ChangeDetectionStrategy, Component } from '@angular/core';
import { HeaderComponent } from './components/header';
import { HeroComponent } from './components/hero';
import { AboutComponent } from './components/about';
import { ExperienceComponent } from './components/experience';
import { EducationComponent } from './components/education';
import { SkillsComponent } from './components/skills';
import { ContactComponent } from './components/contact';
import { FooterComponent } from './components/footer';

@Component({
  selector: 'app-root',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [
    HeaderComponent,
    HeroComponent,
    AboutComponent,
    ExperienceComponent,
    EducationComponent,
    SkillsComponent,
    ContactComponent,
    FooterComponent,
  ],
  // host is @container so every child section can use @md/@lg container-query
  // variants — matching the design guide's "container queries, no media queries".
  host: { class: '@container block' },
  template: `
    <app-header />
    <main>
      <app-hero />
      <app-about />
      <app-experience />
      <app-education />
      <app-skills />
      <app-contact />
    </main>
    <app-footer />
  `,
})
export class App {}
