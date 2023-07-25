import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface BlogPostCard {
  mainImageUrl: string;
  category: string;
  title: string;
  description: string;
  postDate: string;
  authorImageUrl: string;
  authorName: string;
}

@Component({
  selector: 'app-card-grid',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div
      class="grid md:grid-cols-2 p-8 gap-8 lg:grid-cols-3 sm:grid-cols-1 xl:grid-cols-4"
    >
      <div
        class="rounded-xl shadow-xl bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700 "
        *ngFor="let data of posts()"
      >
        <img
          class="rounded-t-xl  w-full h-36 object-cover"
          [src]="data.mainImageUrl"
        />
        <div class="flex flex-col p-7">
          <div class="flex flex-row">
            <div
              class="text-xs font-semibold uppercase bg-yellow-100 p-1 px-2 text-yellow-700 rounded-2xl"
            >
              {{ data.category }}
            </div>
          </div>
          <h2 class="text-xl font-bold truncate mt-1 dark:text-white">
            {{ data.title }}
          </h2>
          <p class="text-base text-gray-600 dark:text-gray-200 mt-1">
            {{ data.description }}
          </p>
          <div class="flex flex-row mt-5 items-center justify-start">
            <img class="rounded-2xl mr-2" [src]="data.authorImageUrl" />
            <p class="font-bold text-sm mr-2 dark:text-white">
              {{ data.authorName }}
            </p>
            <p class="text-gray-400 dark:text-gray-500 text-sm">
              On {{ data.postDate }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [],
})
export class CardGridComponent {
  posts = signal<BlogPostCard[]>([
    {
      mainImageUrl: 'https://source.unsplash.com/odxB5oIG_iA/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/e-S-Pe2EmrE/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/EAvS-4KnGrk/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/RP6Ba_6U154/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/I2YSmEUAgDY/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/hpTH5b6mo2s/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/2TQwrtZnl08/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
    {
      mainImageUrl: 'https://source.unsplash.com/cGwfkwHmt98/400x250',
      category: 'freelancing',
      title: 'The Road to Freedom',
      description:
        'Freelancing can be a great way to experience true freedom in your life. You can work anywhere, everywhere...',
      authorImageUrl: 'https://source.unsplash.com/7YVZYZeITc8/30x30',
      authorName: 'John Smith',
      postDate: '10th August 2020',
    },
  ]);
}
