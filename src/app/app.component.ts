import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public pages: any[] = [
    {title: 'FORMATION', url: '/formation', icon: 'people'},
    {title: 'EXPERIENCE', url: '/experience', icon: 'people'},
    {title: 'COMPETANCE', url: '/competance', icon: 'settings'},
    {title: 'LANGUE', url: '/about', icon: 'information-circle'},
    {title: 'LOISIRS', url: '/about', icon: 'information-circle'},
    {title: 'LANGUE', url: '/about', icon: 'information-circle'},

    {title: 'Sign Out', url: '', icon: 'log-out', route: true},
  ];

  constructor(private modalController: ModalController) { }

  // const requestOptions = { headers: headers };
  // this.httpClient.get("https://aware-backend.herokuapp.com/api/profile", requestOptions).subscribe((response: any)=>{
  //   console.log(response);
  //   this.users = response;
  // }, (error)=>{
  //     console.error(error);
  // });

async closeModal(){
  await this.modalController.dismiss();
}
}
