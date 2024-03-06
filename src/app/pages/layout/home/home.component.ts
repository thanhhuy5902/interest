import { Component } from '@angular/core';
import { TaigaModule } from '../../../shared/taiga.module';
import { ShareModule } from '../../../shared/share.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TaigaModule, ShareModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  bannerImage =
    'https://cdn.tgdd.vn/Files/2020/08/20/1281844/thit-bo-kobe-co-gi-ma-sao-lai-dat-do-den-nhu-vay-202008201518109704.jpg';
  readonly avatarUrl = `https://taiga-ui.dev/assets/images/avatar.jpg`;
  onClick(event: MouseEvent): void {
    console.info('click ', this.avatarUrl, event);
  }
}
