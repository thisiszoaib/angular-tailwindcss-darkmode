import { Component, HostBinding, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardGridComponent } from './components/card-grid.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CardGridComponent],
  template: `
    <div class="min-h-screen min-w-full bg-slate-200 dark:bg-slate-700">
      <div
        class="flex justify-between items-center bg-teal-600 text-white dark:bg-slate-900 p-5 font-semibold text-lg shadow-lg"
      >
        Dark Mode with Angular and TailwindCSS
        <button
          class="flex transition-transform hover:scale-125 align-middle"
          (click)="darkMode.set(!darkMode())"
        >
          <span *ngIf="!darkMode()" class="material-icons">dark_mode</span>
          <span *ngIf="darkMode()" class="material-icons">light_mode</span>
        </button>
      </div>

      <app-card-grid />
    </div>
  `,
  styles: [``],
})
export class AppComponent {
  darkMode = signal<boolean>(
    JSON.parse(window.localStorage.getItem('darkMode') ?? 'false')
  );

  @HostBinding('class.dark') get mode() {
    return this.darkMode();
  }

  constructor() {
    effect(() => {
      window.localStorage.setItem('darkMode', JSON.stringify(this.darkMode()));
    });
  }
}
