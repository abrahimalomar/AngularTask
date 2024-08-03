import { Component, Input } from '@angular/core';

import { SharedBooksService } from '../../services/shared-books.service';
import { BookCardComponent } from '../../Shared/book-card/book-card.component';
import { Ibook } from '../../models/Ibook';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-preview',
  standalone: true,
  imports: [BookCardComponent,CommonModule],
  templateUrl: './list-preview.component.html',
  styleUrls: ['./list-preview.component.css']
})
export class ListPreviewComponent {

  @Input() books: Ibook[] = [];
  backgroundColor: string = 'red';
  constructor(private sharedBooksService: SharedBooksService) {
    this.sharedBooksService.selectedBooks$.subscribe(books => {
      this.books = books;
    });
  }

  changeBackgroundColor(color: string): void {
    const element = document.getElementById('list-preview');
    if (element) {
      (element as HTMLElement).style.backgroundColor = color;
    }
  }
}
