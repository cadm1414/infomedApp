import { Component } from '@angular/core';
import { Router } from '@angular/router';

import {IonGrid,IonCol,IonRow,IonButton,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonCard,IonHeader,IonToolbar,IonTitle,IonMenu,IonContent,IonNote,IonList,IonItem,IonLabel,IonButtons,IonMenuButton} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonGrid,IonCol,IonRow,IonButton,IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonHeader,IonToolbar,IonTitle,IonMenu,IonContent,IonNote,IonList,IonItem,IonLabel,IonButtons,IonMenuButton],
})
export class HomePage {

  
  constructor(private route: Router) { }

  evento(): void{
    this.route.navigate(['/stock-consol']);
  }

  
}
