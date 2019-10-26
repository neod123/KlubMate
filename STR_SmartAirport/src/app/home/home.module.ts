import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HomePage } from './home.page';
import { HttpClientModule } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HttpClientModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage]
})

export class HomePageModule {



    constructor(private http: HttpClient) {
        const headerDict = {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          'Access-Control-Allow-Headers': 'Content-Type',
          'Ocp-Apim-Subscription-Key': '6e69cb639b4945c58eae218eec31ea40',
        }

        const requestOptions = {
          headers: new Headers(headerDict),
        };


        this.http.get('http://fsg-datahub.azure-api.net/legacy/Flights/Get?from=2019-10-25T3:00:00&till=2019-10-25T3:10:00', requestOptions  ).subscribe((response) => {
            console.log(response);
        });
    }

}
