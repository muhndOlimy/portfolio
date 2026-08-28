import { ChangeDetectionStrategy, Component } from '@angular/core';
import { skillGroups } from '../content/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-skills',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="skills" class="mx-auto max-w-[88rem] px-5 pt-20">
      <div class="grid gap-6 @lg:grid-cols-[1fr_2fr]">
        <div appReveal>
          <h2 class="text-3xl font-semibold tracking-tight text-ink">Skills</h2>
          <p class="mt-2 font-serif text-body">What I reach for, grouped honestly.</p>
        </div>

        <div class="grid grid-cols-1 gap-4 @md:grid-cols-2">
          @for (group of skillGroups; track group.title; let i = $index) {
            <div appReveal [revealDelay]="i * 70" class="hover-lift rounded-2xl bg-card p-5 shadow-sm">
              <h3 class="text-xs font-medium uppercase tracking-widest text-subtle">
                {{ group.title }}
              </h3>
              <div class="mt-3 flex flex-wrap gap-2">
                @for (skill of group.skills; track skill) {
                  <span
                    class="rounded-[9px] bg-chip px-2.5 py-1 text-xs font-medium text-body"
                    >{{ skill }}</span
                  >
                }
              </div>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class SkillsComponent {
  readonly skillGroups = skillGroups;
}
