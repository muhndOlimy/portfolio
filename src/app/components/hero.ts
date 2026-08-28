import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../content/portfolio.data';

@Component({
  selector: 'app-hero',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <section id="top" class="mx-auto max-w-[88rem] px-5 pt-6">
      <div class="rounded-3xl bg-card p-6 shadow-sm @lg:p-10">
        <div class="grid gap-8 @lg:grid-cols-2 @lg:items-center">
          <div class="@lg:py-8">
            <h1
              class="animate-rise text-4xl font-semibold leading-[1.05] tracking-tight text-ink @lg:text-6xl"
              style="--i: 0"
            >
              Senior Software Developer
            </h1>

            <p
              class="animate-rise mt-5 max-w-xl font-serif text-lg leading-relaxed text-body"
              style="--i: 1"
            >
              {{ profile.heroLead }}
            </p>

            <div class="animate-rise mt-7 flex flex-wrap gap-3" style="--i: 2">
              <a
                href="#contact"
                class="inline-flex items-center gap-1.5 rounded-full bg-dark px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
              >
                Get in touch
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
              <a
                href="/Mohanad%20Olimy%20Resume.pdf"
                download="Mohanad-Olimy-Resume.pdf"
                class="inline-flex items-center gap-1.5 rounded-full bg-chip px-5 py-2.5 text-sm font-medium text-ink transition-colors hover:bg-chip-hover"
              >
                <span class="material-symbols-outlined text-[18px]">download</span>
                Download resume
              </a>
            </div>
          </div>

          <div class="animate-rise flex justify-center @lg:justify-end" style="--i: 3">
            <img
              src="/portfolio-img.jpeg"
              alt="Mohanad Olimy"
              width="1035"
              height="1024"
              class="aspect-square w-64 rounded-full object-cover shadow-sm @lg:w-80"
            />
          </div>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  readonly profile = profile;
}
