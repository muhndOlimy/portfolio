import {
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  Renderer2,
  inject,
} from '@angular/core';

/**
 * Scroll-reveal directive. Adds `is-revealed` to the host once it scrolls
 * into view (via IntersectionObserver). Pair with the `.reveal` base class
 * in styles.scss for the fade-up transition. Optional stagger delay in ms.
 *
 *   <div appReveal>…</div>
 *   <article appReveal [revealDelay]="i * 80">…</article>
 */
@Directive({
  selector: '[appReveal]',
})
export class RevealDirective implements OnInit, OnDestroy {
  @Input() revealDelay = 0;

  private readonly el = inject(ElementRef<HTMLElement>);
  private readonly renderer = inject(Renderer2);
  private observer?: IntersectionObserver;

  ngOnInit(): void {
    const host = this.el.nativeElement as HTMLElement;
    this.renderer.addClass(host, 'reveal');

    if (this.revealDelay) {
      this.renderer.setStyle(host, 'transition-delay', `${this.revealDelay}ms`);
    }

    // No IntersectionObserver (SSR / very old browsers) → show immediately.
    if (typeof IntersectionObserver === 'undefined') {
      this.renderer.addClass(host, 'is-revealed');
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            this.renderer.addClass(host, 'is-revealed');
            this.observer?.unobserve(host);
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );

    this.observer.observe(host);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
