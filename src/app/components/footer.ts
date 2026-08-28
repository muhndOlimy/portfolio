import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../content/portfolio.data';

@Component({
  selector: 'app-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <footer class="mx-auto max-w-[88rem] px-5 pb-12 pt-20">
      <div class="grid gap-8 border-t border-line pt-10 @lg:grid-cols-2">
        <div>
          <p class="text-xs font-medium uppercase tracking-widest text-subtle">Sections</p>
          <ul class="mt-3 flex flex-col gap-2 text-sm text-muted">
            <li><a href="#about" class="hover:text-ink">About</a></li>
            <li><a href="#work" class="hover:text-ink">Experience</a></li>
            <li><a href="#education" class="hover:text-ink">Education</a></li>
            <li><a href="#skills" class="hover:text-ink">Skills</a></li>
          </ul>
        </div>

        <div>
          <p class="text-xs font-medium uppercase tracking-widest text-subtle">Elsewhere</p>
          <ul class="mt-3 flex flex-col gap-2 text-sm text-muted">
            @for (social of profile.socials; track social.label) {
              <li>
                <a
                  [href]="social.href"
                  target="_blank"
                  rel="noopener"
                  class="inline-flex items-center gap-2 hover:text-ink"
                >
                  <span class="material-symbols-outlined text-[18px]">{{ social.icon }}</span>
                  {{ social.label }}
                </a>
              </li>
            }
          </ul>
        </div>
      </div>

      <p class="mt-10 text-xs text-faint">© {{ year }} {{ profile.name }}.</p>
    </footer>
  `,
})
export class FooterComponent {
  readonly profile = profile;
  readonly year = new Date().getFullYear();
}
