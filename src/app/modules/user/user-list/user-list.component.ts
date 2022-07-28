import { Component, OnInit } from '@angular/core';
import { ICardUser } from '@shared/components/cards/card-user/icard-user.metadata';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  public users: ICardUser[] = [
    {
      nombre: 'Agustin Sandiyu',
      edad: 23,
      descripcion: 'Ingenieria en sistemas 3°A',
      avatar: '../../../../assets/Img/men.jpg',
    },
    {
      nombre: 'Hernan Gonzalez',
      edad: 21,
      descripcion: 'Ingenieria en sistemas 2°B',
      avatar: '../../../../assets/Img/Hombre3.png',
    },
    {
      nombre: 'Franco Acevedo',
      edad: 20,
      descripcion: 'Ingenieria en sistemas 2°C',
      avatar: '../../../../assets/Img/Hombre2.png',
    },
    {
      nombre: 'Gorge Sanchez',
      edad: 22,
      descripcion: 'Ingenieria en sistemas 2°A',
      avatar: '../../../../assets/Img/Hombre.png',
    },
    {
      nombre: 'Luciana Tolosa',
      edad: 19,
      descripcion: 'Ingenieria en sistemas 2°B',
      avatar: '../../../../assets/Img/Mujer2.png',
    },
    {
      nombre: 'Flavia Mendoza',
      edad: 22,
      descripcion: 'Ingenieria en sistemas 2°C',
      avatar: '../../../../assets/Img/Mujer.png',
    },

  ];

  constructor() { }

  ngOnInit() {
  }

}
