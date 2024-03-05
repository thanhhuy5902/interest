import { Component } from '@angular/core';
import { ShareModule } from '../../shared/share.module';
import { TaigaModule } from '../../shared/taiga.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [ShareModule, TaigaModule],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
})
export class DetailComponent {
  index = 0;

  itemsCount = 1;
  showMore = false;
  maxLength = 50;

  items = [
    {
      id: 1,
      date: '2021-01-01',
      userName: 'First',
      userImage:
        'https://i.pinimg.com/564x/7f/83/be/7f83be1ab9a21560acea383417a0a13b.jpg',
      contentImage: [
        'https://i.pinimg.com/736x/6f/76/31/6f7631631cde4c3ce7d036bd812f42b3.jpg',
        'https://i.pinimg.com/564x/c5/14/10/c514107b11a112c1e9d91048c369d1ca.jpg',
        'https://i.pinimg.com/564x/80/d4/f3/80d4f34e66796b12bfd623a45115fdfd.jpg',
        'https://i.pinimg.com/564x/a4/b6/5e/a4b65eb25169e7176a737274ddcbe456.jpg',
        'https://i.pinimg.com/564x/52/6b/61/526b61b98d102102dbc9b7ec2bd95d0b.jpg',
      ],

      like: 10,
      comments: [
        {
          userName: 'joe',
          userImage:
            'https://i.pinimg.com/564x/80/d4/f3/80d4f34e66796b12bfd623a45115fdfd.jpg',
          content:
            'Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this weeks snack plan with them',
        },
        {
          userName: 'joe1',
          userImage:
            'https://i.pinimg.com/564x/80/d4/f3/80d4f34e66796b12bfd623a45115fdfd.jpg',
          content:
            'Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this weeks snack plan with them',
        },
        {
          userName: 'joe2',
          userImage:
            'https://i.pinimg.com/564x/80/d4/f3/80d4f34e66796b12bfd623a45115fdfd.jpg',
          content:
            'Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this weeks snack plan with them',
        },
        {
          userName: 'joe3',
          userImage:
            'https://i.pinimg.com/564x/80/d4/f3/80d4f34e66796b12bfd623a45115fdfd.jpg',
          content:
            'Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this weeks snack plan with them',
        },
        {
          userName: 'joe',
          userImage:
            'https://i.pinimg.com/564x/80/d4/f3/80d4f34e66796b12bfd623a45115fdfd.jpg',
          content:
            'Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this weeks snack plan with them',
        },
        {
          userName: 'joe4',
          userImage:
            'https://i.pinimg.com/564x/80/d4/f3/80d4f34e66796b12bfd623a45115fdfd.jpg',
          content:
            'Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this weeks snack plan with them',
        },
      ],
      hagtag: ['snack', 'healthy', 'hagtag3'],
      content:
        'Feeling hungry? When our week gets busy, it can be challenging to get creative with your tasty plant-based meal options — we get it! Tag a friend to share this weeks snack plan with them',

      isLiked: false,
    },
  ];

  get rounded(): number {
    return Math.floor(this.index / this.itemsCount);
  }

  onIndex(index: number): void {
    this.index = index * this.itemsCount;
  }

  exampleForm = new FormGroup({
    exampleControl: new FormControl(''),
  });

  open = false;
  openReport = false;

  onClick(): void {
    this.openReport = !this.openReport;
  }

  onObscured(obscured: boolean): void {
    if (obscured) {
      this.openReport = false;
    }
  }

  onActiveZone(active: boolean): void {
    this.openReport = active && this.openReport;
  }
  showDialog(): void {
    this.open = true;
  }
  like(id: number) {
    this.items = this.items.map((item) => {
      if (item.id === id) {
        item.isLiked = !item.isLiked;
        if (item.isLiked) {
          item.like += 1;
        } else {
          item.like -= 1;
        }
      }
      return item;
    });

    console.log(this.items);
  }
}
