import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  @Output() bookCreated = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addBook(f : NgForm){
    //console.log(f);
    const values = f.value;
    const book = new Book(
      Math.round(Math.random() * 100),
      values.titre,
      values.auteur,
      new Date(values.datePublication)
    );
    this.bookCreated.emit(book);
    //console.log(book);
  }

}
