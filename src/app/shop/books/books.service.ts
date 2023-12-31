import { Injectable } from '@angular/core';
import { Books } from 'src/app/shared/model/books';
@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getAll(): Books[]{
    return [
     {
       id:1,
       name: 'The Unplugged Alpha by Richard Cooper',
       price: 700,
       tags: ['Books','Masculinity', 'Read'],
       favorite: false,
       stars:4.0,
       imageUrl: '/assets/images/books/book-1.jpg',
       origins: ['NewYork'],
      },
      {
        id:1,
        name: 'The Rationale Male by Rollo Tomassi',
        price: 1000,
        tags: ['Books','Masculinity', 'Read'],
        favorite: false,
        stars:3.0,
        imageUrl: '/assets/images/books/book-2.jpg',
        origins: ['Russia '],
       },
       {
        id:1,
        name: 'The Walls Speaks by Jerr  rrej',
        price: 900,
        tags: ['Books','Walls','Masculinity', 'Read'],
        favorite: false,
        stars:4.3,
        imageUrl: '/assets/images/books/book-3.jpg',
        origins: ['USA'],
       },
       {
        id:1,
        name: 'The 48 Laws of Power by Robert Greene',
        price: 1500,
        tags: ['Books','Power','Masculinity', 'Read'],
        favorite: false,
        stars:2.6,
        imageUrl: '/assets/images/books/book-5.jpg',
        origins: ['Germany'],
       },
       {
        id:1,
        name: 'Mans Search for Meaning by Viktor E. Frankl',
        price: 800,
        tags: ['Books','man','Masculinity', 'Read'],
        favorite: false,
        stars:3.3,
        imageUrl: '/assets/images/books/book-4.jpg',
        origins: ['UK'],
       },
       {
        id:1,
        name: 'Think And Grow Rich by Napoleon Hill',
        price: 2000,
        tags: ['Books','Money', 'Money','Masculinity', 'Read'],
        favorite: false,
        stars:5.0,
        imageUrl: '/assets/images/books/book-6.jpg',
        origins: ['Canada'],
       },
    ]
  }
}
