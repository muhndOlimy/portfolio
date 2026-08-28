import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../content/portfolio.data';
import { RevealDirective } from '../shared/reveal.directive';

@Component({
  selector: 'app-contact',
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [RevealDirective],
  template: `
    <section id="contact" class="mx-auto max-w-[88rem] px-5 pt-20">
      <div appReveal class="rounded-3xl bg-dark p-8 text-white shadow-sm @lg:p-14">
        <div class="grid gap-10 @lg:grid-cols-2 @lg:items-center">
          <div>
            <h2 class="text-3xl font-semibold leading-tight tracking-tight @lg:text-4xl">
              Let's talk about what you're building.
            </h2>
            <p class="mt-4 max-w-md font-serif leading-relaxed text-ondark">
              Tell me about the role or the project. I read every message myself and reply within a
              couple of days.
            </p>

            <div class="mt-8 flex flex-col gap-2">
              <a
                [href]="'mailto:' + profile.email"
                class="inline-flex items-center gap-2 text-lg font-medium text-accent-strong hover:text-white"
              >
                <span class="material-symbols-outlined text-[20px]">mail</span>
                {{ profile.email }}
              </a>
              <span class="inline-flex items-center gap-2 text-ondark">
                <span class="material-symbols-outlined text-[20px]">call</span>
                {{ profile.phone }}
              </span>
            </div>
          </div>

          <div class="flex flex-col gap-3">
            @for (social of profile.socials; track social.label) {
              <a
                [href]="social.href"
                target="_blank"
                rel="noopener"
                class="flex items-center justify-between rounded-2xl bg-white/5 px-6 py-4 text-white ring-1 ring-white/10 transition-colors hover:bg-white/10"
              >
                <span class="flex items-center gap-3 font-medium">
                  <span class="material-symbols-outlined text-accent-strong">{{ social.icon }}</span>
                  {{ social.label }}
                </span>
                <span class="material-symbols-outlined text-[20px] text-accent-strong"
                  >open_in_new</span
                >
              </a>
            }
          </div>
        </div>
      </div>
    </section>
  `,
})
export class ContactComponent {
  readonly profile = profile;
}
