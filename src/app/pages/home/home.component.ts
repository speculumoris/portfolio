import { Component, ElementRef } from '@angular/core';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
   
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  currentProjectTitle: any = 'Devam eden Projeler';
  doneProjectTitle: any = 'Yapılan Proje ve işler';
  homeTitle: any = 'Hakkında';
  homeDescription: any =
    'Çocukluğumuzdan beridir yaptığımız baba mesleğimizde ustayız. Her türlü elektrik işlerinizde bizimle iletişime geçebilirsiniz.2017 yılından bu yana hizmet verdiğimiz birçok projede, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışımızla çalışmalarımızı sürdürmekteyiz.  ';
  constructor(private sliderRef: ElementRef) {}

  source1: string[] = [
    '../../../assets/img/doneProje/bekerE1.jpeg',
    '../../../assets/img/doneProje/bekerE2.jpeg',
    '../../../assets/img/doneProje/bekerE3.jpeg',
    '../../../assets/img/doneProje/bekerE4.jpeg',
    '../../../assets/img/doneProje/bekerE5.jpeg',
    '../../../assets/img/doneProje/bekerE6.jpeg',
    '../../../assets/img/doneProje/bekerE7.jpeg',
    '../../../assets/img/doneProje/bekerE9.jpeg',
    '../../../assets/img/doneProje/bekerE10.jpeg',
  ];
  source2: string[] = [
    '../../../assets/img/continiueProj/beker1.jpeg',
    '../../../assets/img/continiueProj/beker2.jpeg',
    '../../../assets/img/continiueProj/beker3.jpeg',
    '../../../assets/img/continiueProj/beker4.jpeg',
    '../../../assets/img/continiueProj/beker5.jpeg',
    '../../../assets/img/continiueProj/beker6.jpeg',
    '../../../assets/img/continiueProj/beker7.jpeg',
    '../../../assets/img/continiueProj/beker8.jpeg',
    '../../../assets/img/continiueProj/beker9.jpeg',
    '../../../assets/img/continiueProj/beker10.jpeg',
    '../../../assets/img/continiueProj/beker11.jpeg',
    '../../../assets/img/continiueProj/beker12.jpeg',
    '../../../assets/img/continiueProj/beker13.jpeg',
    '../../../assets/img/continiueProj/beker14.jpeg',
  ];

  projectDescriptions: string[] = [
    'Beker Elektrik olarak 2017 yılından bu yana hizmet verdiğimiz birçok projede, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışımızla çalışmalarımızı sürdürmekteyiz.',
    'Beker Elektrik olarak 2017 yılından bu yana hizmet verdiğimiz birçok projede, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışımızla çalışmalarımızı sürdürmekteyiz.',
    'Beker Elektrik olarak 2017 yılından bu yana hizmet verdiğimiz birçok projede, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışımızla çalışmalarımızı sürdürmekteyiz.',
    'Beker Elektrik olarak 2017 yılından bu yana hizmet verdiğimiz birçok projede, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışımızla çalışmalarımızı sürdürmekteyiz.',
    'Beker Elektrik olarak 2017 yılından bu yana hizmet verdiğimiz birçok projede, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışımızla çalışmalarımızı sürdürmekteyiz.',
    'Beker Elektrik olarak 2017 yılından bu yana hizmet verdiğimiz birçok projede, müşteri memnuniyetini ön planda tutarak, kaliteli ve güvenilir hizmet anlayışımızla çalışmalarımızı sürdürmekteyiz.',
  ];
  currentProjectDescription: string =
    ' Burada gördüğünüz projenin tüm elektrik işleri bize emanet edilmiştir.Elektrik tesisatı,Gerekli ışıklandırmalar,elektrik panoları ve diğer elektrik işleri tarafımızdan yapılmaya başlanmıştır.';

  currentsProjectDescription: string = this.projectDescriptions[0];

  updateDescription(index: number): void {
    this.currentsProjectDescription = this.projectDescriptions[index];
  }
}
