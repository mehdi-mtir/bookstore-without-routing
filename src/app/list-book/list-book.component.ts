import { Component, OnInit } from '@angular/core';
import { Book } from '../model/book';

@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.css']
})
export class ListBookComponent implements OnInit {
  listBooks = [
    new Book(1, "The Slight Edge", "Jeff Olsen", new Date("2010/09/09")),
    new Book(2, "Atomic Habits", "James Clear", new Date("2018/02/10")),
    new Book(3, "So Good They Can't ignore you", "Cal Newport", new Date("2015/12/08"))
  ];
  book = new Book();
  action = "";

  constructor() { }

  ngOnInit(): void {
  }

  addBook(book : Book){
    this.listBooks = [...this.listBooks, book];
    this.action=''
  }

  deleteBook(id : number){
    if(confirm("Etes-vous sûre de vouloir supprimer le livre?")){
      this.listBooks = this.listBooks.filter(
        (book)=>book.id!==id
      )
    }
  }

  showBookToAdd(){
    this.action = 'add';
  }

  showBookToEdit(book : Book){
    this.book = book;
    this.action = 'edit';
  }

}
