import { ActivatedRoute } from '@angular/router';
import { Component } from '@angular/core';
import { BooksService } from '../shop/books/books.service';
import { Books } from '../shared/model/books';
import { __param } from 'tslib';


@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {


  books:Books[] = [];

  constructor( private booksService:BooksService, private Routes:
    ActivatedRoute) {}

  ngOnInit(): void {
    this.Routes.params.subscribe(params => {

    })
    this.books = this.booksService.getAll();

  }
}
