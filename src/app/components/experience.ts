import { ChangeDetectionStrategy, Component } from '@angular/core';
import { experience } from '../content/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-experience',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="work" class="mx-auto max-w-[88rem] px-5 pt-20">
      <div appReveal class="flex items-baseline justify-between">
        <h2 class="text-3xl font-semibold tracking-tight text-ink">Experience</h2>
        <span class="text-sm text-subtle">2021 — present</span>
      </div>

      <div class="mt-6 flex flex-col gap-4">
        @for (job of experience; track job.company + job.period; let i = $index) {
          <article
            appReveal
            [revealDelay]="i * 70"
            class="hover-lift rounded-3xl bg-card p-6 shadow-sm @lg:p-8"
          >
            <div class="grid gap-4 @lg:grid-cols-[200px_1fr]">
              <div>
                <p class="text-sm font-medium text-accent">{{ job.period }}</p>
                <p class="mt-1 text-sm text-muted">{{ job.company }}</p>
              </div>
              <div>
                <h3 class="text-lg font-semibold text-ink">{{ job.role }}</h3>
                <p class="mt-2 font-serif leading-relaxed text-body">{{ job.summary }}</p>

                <ul class="mt-3 flex flex-col gap-2">
                  @for (point of job.highlights; track point) {
                    <li class="flex gap-2 font-serif text-sm leading-relaxed text-body">
                      <span
                        class="material-symbols-outlined mt-0.5 shrink-0 text-[16px] text-accent"
                        >check_small</span
                      >
                      <span>{{ point }}</span>
                    </li>
                  }
                </ul>

                <div class="mt-4 flex flex-wrap gap-2">
                  @for (tag of job.tags; track tag) {
                    <span
                      class="rounded-[9px] bg-chip px-2.5 py-1 text-xs font-medium text-body"
                      >{{ tag }}</span
                    >
                  }
                </div>
              </div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  readonly experience = experience;
}
