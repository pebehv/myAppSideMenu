import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { AlertController, ToastController } from '@ionic/angular';


@Component({
  selector: 'app-cities-p',
  templateUrl: './cities-p.page.html',
  styleUrls: ['./cities-p.page.scss'],
})
export class CitiesPPage implements OnInit {
  cities: Array<any> = [];

  constructor(
    private http: HttpClient,
    private toastController: ToastController,
    private alertController: AlertController
  ) { }

  ngOnInit() {
    this.getCities()
    .subscribe(ele =>{
      console.log("mis datos ", ele)
      this.cities = ele;
    })
  }

  getCities(){
    return this.http.get('assets/files/cities.json')
    .pipe(
      map((value: any)=>{
        return value.data;
      }) 
    )
  }

  async presentTostil(){
    const toast = await this.toastController.create(
      {
        message: 'Ciudad Seleccionada',
        duration: 2000,
        position: 'bottom'
      }
    );
    toast.present()
  }
  async presentAlert(){
    const alert= await this.alertController.create({
      header: 'Borrar ciudad',
      message: 'Se ha borrado la ciudad seleccionada',
      buttons: ['OK'],
    });
    await alert.present()
    let result = await alert.onDidDismiss();
    console.log("result", result)
  }
}
