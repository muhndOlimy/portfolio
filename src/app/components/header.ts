import { ChangeDetectionStrategy, Component } from '@angular/core';
import { profile } from '../content/portfolio.data';

@Component({
  selector: 'app-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <header
      class="sticky top-0 z-50 backdrop-blur-[14px]"
      style="background: rgba(244,246,242,0.82)"
    >
      <div class="mx-auto flex max-w-[88rem] items-center justify-between px-5 py-4">
        <a href="#top" class="flex items-center gap-2 font-semibold text-ink">
          <span class="inline-block size-3 rounded-full bg-accent-strong"></span>
          {{ name }}
        </a>

        <nav
          class="hidden items-center gap-1 rounded-full bg-card p-1 shadow-sm @md:flex"
        >
          @for (item of nav; track item.href) {
            <a
              [href]="item.href"
              class="rounded-full px-4 py-1.5 text-sm font-medium text-muted transition-colors hover:text-ink"
              >{{ item.label }}</a
            >
          }
          <a
            href="#contact"
            class="rounded-full bg-dark px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-accent-deep"
            >Contact</a
          >
        </nav>
      </div>
    </header>
  `,
})
export class HeaderComponent {
  readonly name = profile.name;
  readonly nav = [
    { label: 'About', href: '#about' },
    { label: 'Work', href: '#work' },
    { label: 'Education', href: '#education' },
    { label: 'Skills', href: '#skills' },
  ];
}
