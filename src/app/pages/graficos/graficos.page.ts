import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonSpinner } from '@ionic/angular/standalone';
import { GraficoBarrasComponent } from 'src/app/components/grafico-barras/grafico-barras.component';
import { GraficoBarrasRealComponent } from 'src/app/components/grafico-barras-real/grafico-barras-real.component';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/services/storage.service';
import { imgIdInterface, imgInterface } from 'src/app/interfaces/img-interface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-graficos',
  templateUrl: './graficos.page.html',
  styleUrls: ['./graficos.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule, GraficoBarrasComponent,
    GraficoBarrasRealComponent,]
})
export class GraficosPage implements OnInit {

  router = inject(Router);

  firestorage = inject(StorageService);
  data = inject(DataService);


  images: imgIdInterface[] = [];

  constructor() { }

  ngOnInit() {
    this.firestorage.getImgs().subscribe((imgs) => {
      this.images = imgs;
    });

    this.data.agregarLikes();
    this.data.agregarDislikes();
  }

  goHome() {
    this.router.navigateByUrl('/home');
  }

}
