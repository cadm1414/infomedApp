import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonLabel, IonButton, IonToast, IonFooter, IonCheckbox } from '@ionic/angular/standalone';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [ IonHeader, IonToolbar, IonTitle, IonContent, IonList, IonItem, IonInput, IonLabel, IonButton, IonToast, IonFooter, IonCheckbox]
})
export class LoginPage implements OnInit {
  username: string = ""
  password: string = ""
  isToastOpen: boolean = false

  constructor(private route: Router) { }

  ngOnInit() {
  }

  setOpen(isOpen: boolean) {
    //this.isToastOpen = isOpen;
    this.route.navigate(['/home']);
  }

}
