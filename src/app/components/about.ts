import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile, stats } from '../content/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-about',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="about" class="mx-auto max-w-[88rem] px-5 pt-16">
      <div class="grid gap-6 @lg:grid-cols-[1.6fr_1fr]">
        <div appReveal class="rounded-3xl bg-card p-6 shadow-sm @lg:p-10">
          <p class="text-xs font-medium uppercase tracking-widest text-subtle">
            {{ profile.aboutEyebrow }}
          </p>
          <h2 class="mt-3 text-2xl font-semibold leading-snug text-ink @lg:text-3xl">
            {{ profile.aboutHeadline }}
          </h2>
          @for (para of profile.aboutBody; track para) {
            <p class="mt-4 font-serif leading-relaxed text-body">{{ para }}</p>
          }
        </div>

        <div class="flex flex-col gap-4">
          @for (stat of stats; track stat.label; let i = $index) {
            <div
              appReveal
              [revealDelay]="i * 90"
              class="flex flex-1 flex-col justify-center rounded-3xl p-6 shadow-sm"
              [class.bg-dark]="stat.dark"
              [class.text-white]="stat.dark"
              [class.bg-card]="!stat.dark"
            >
              <p class="text-4xl font-semibold tracking-tight">{{ stat.value }}</p>
              <p
                class="mt-1 text-sm"
                [class.text-ondark]="stat.dark"
                [class.text-muted]="!stat.dark"
              >
                {{ stat.label }}
              </p>
            </div>
          }
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  readonly profile = profile;
  readonly stats = stats;
}
