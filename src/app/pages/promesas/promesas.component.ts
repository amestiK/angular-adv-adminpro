import { Component, OnInit } from '@angular/core';
import { resolve } from 'chart.js/dist/helpers/helpers.options';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [
  ]
})
export class PromesasComponent implements OnInit {

  constructor(){

  }

  ngOnInit(): void {
    this.getUsuarios().then(usuario => {
      console.log(usuario);
    });
    // const promesa = new Promise((resolve, reject) => {

    //   if (false) {
    //     resolve('Hola mundo');
    //   } else {
    //     reject('Algo salio mal');
    //   }



    // });

    // promesa.then((mensaje) => {
    //   console.log(mensaje)
    // }).catch(error => console.log(error))

    // console.log('Fin del Init');

  }

  getUsuarios(){

    return new Promise( resolve =>{

      fetch('https://reqres.in/api/users')
    .then(resp => resp.json()
    .then(body => resolve(body.data)));

    })

  }

}
