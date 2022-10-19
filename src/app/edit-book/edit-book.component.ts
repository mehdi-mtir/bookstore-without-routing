import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Book } from '../model/book';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  @Input() bookToEdit = new Book();

  constructor() { }

  ngOnInit(): void {
  }

  editBook(f : NgForm){

  }

}
