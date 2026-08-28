import { ChangeDetectionStrategy, Component } from '@angular/core';
import { education } from '../content/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-education',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="education" class="mx-auto max-w-[88rem] px-5 pt-20">
      <div class="grid gap-6 @lg:grid-cols-[1fr_2fr]">
        <div appReveal>
          <h2 class="text-3xl font-semibold tracking-tight text-ink">Education</h2>
          <p class="mt-2 font-serif text-body">
            The academic track, alongside the professional one.
          </p>
        </div>

        <div class="flex flex-col gap-3">
          @for (item of education; track item.title; let i = $index) {
            <div
              appReveal
              [revealDelay]="i * 70"
              class="hover-lift flex items-center justify-between gap-4 rounded-2xl bg-card px-6 py-5 shadow-sm"
            >
              <div>
                <h3 class="font-semibold text-ink">{{ item.title }}</h3>
                <p class="mt-0.5 text-sm text-muted">{{ item.institution }}</p>
              </div>
              <span class="whitespace-nowrap text-sm text-subtle">{{ item.period }}</span>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class EducationComponent {
  readonly education = education;
}
