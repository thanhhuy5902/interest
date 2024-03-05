import { Component } from '@angular/core';
import { ShareModule } from '../../shared/share.module';
import { TaigaModule } from '../../shared/taiga.module';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-interest',
  standalone: true,
  imports: [ShareModule, TaigaModule],
  templateUrl: './interest.component.html',
  styleUrl: './interest.component.scss',
})
export class InterestComponent {
  constructor() {}
  index = 0;
  itemsCount = 10;

  sellectedInterest: any = [];
  usersellected = 0;

  iterested2 = [
    [
      {
        name: 'Animal',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/e0/09/7e/e0097e40aaf92cd09a9324c2b9af1400.jpg',
      },
      {
        name: 'Art',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/59/05/aa/5905aa2d6eae6b26c00519bbba5f1c6e.jpg',
      },
      {
        name: 'Music',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/69/32/ea/6932ea8d3ac15af5700dea6307dc4cd8.jpg',
      },
      {
        name: 'Diy',
        backgroundColor: false,
        backgroundUrl:
          'https://i.etsystatic.com/13145288/r/il/9fd8bb/2785552667/il_570xN.2785552667_vh4r.jpg',
      },
      {
        name: 'Education',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/736x/5f/ee/7c/5fee7c17cb704067876460d7c6c09379.jpg',
      },
      {
        name: 'Environment',
        backgroundColor: false,
        backgroundUrl:
          'https://toyota-indus.com/wp-content/uploads/2022/11/Sustianability-Environment-commitment.jpg',
      },
      {
        name: 'Fashion',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/6a/3e/a5/6a3ea5fb53bf9f7be96f7ca8eeeb31ff.jpg',
      },
      {
        name: 'Fitness',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/dd/99/c0/dd99c09fc2e13b98e976ef7a658d64d7.jpg',
      },
      {
        name: 'Food',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/736x/d8/54/51/d85451f55cc6aac6b3bb3290c8ab853a.jpg',
      },
      {
        name: 'gaming',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/ea/bb/6c/eabb6c99a48629c3aa4ac0a37da27359.jpg',
      },
    ],

    [
      {
        name: 'music',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/75/4f/a5/754fa5d98ecc794ec7812e37a0b6180f.jpg',
      },
      {
        name: 'Reahahading',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'blogging',
        backgroundColor: false,
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'careers',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'diy',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'education',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'Reading',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'blogging',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'careers',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'diy',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
    ],

    [
      {
        name: 'Reading',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'blogging',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'careers',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'diy',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'education',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'environment',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'fashion',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'fitness',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'food',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
      {
        name: 'gaming',
        backgroundUrl:
          'https://i.pinimg.com/564x/41/87/4a/41874afb663ca8d601d6a7412c419538.jpg',
      },
    ],
  ];
  get rounded(): number {
    return Math.floor(this.index / this.itemsCount);
  }

  onIndex(index: number): void {
    this.index = index * this.itemsCount;
  }

  //change  background item in array interested2 when click

  changeBackground(item: any) {
    if (this.sellectedInterest.length <= 4) {
      item.backgroundColor = !item.backgroundColor;
      if (item.backgroundColor) {
        this.sellectedInterest.push(item);
      } else {
        this.sellectedInterest = this.sellectedInterest.filter(
          (i: any) => i.name !== item.name,
        );
      }
    } else if (this.sellectedInterest.length > 4) {
      item.backgroundColor = false;
      this.sellectedInterest = this.sellectedInterest.filter(
        (i: any) => i.name !== item.name,
      );
    }
    this.usersellected = this.sellectedInterest.length;
    console.log(this.sellectedInterest);
  }
}
