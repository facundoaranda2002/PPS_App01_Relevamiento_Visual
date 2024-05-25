import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, IonIcon, IonNavLink, IonSpinner } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [IonSpinner, IonNavLink, IonIcon, IonButtons, IonButton, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class HomePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  authService = inject(AuthService);
  router = inject(Router);
  
  goRegister()
  {
    this.router.navigateByUrl("/registro");
  }

  goLogin()
  {
    this.router.navigateByUrl("/login");
  }

  goHome()
  { 
    this.router.navigateByUrl("/home");
  }
  logout() : void
  {
    this.authService.logout();
    this.router.navigateByUrl("/login");
  }
  
  goCosasLindas() {
    this.router.navigateByUrl('/cosas-lindas');
  }

  goCosasFeas() {
    this.router.navigateByUrl('/cosas-feas');
  }

  goCosasGraficos() {
    this.router.navigateByUrl('/graficos');
  }

}
