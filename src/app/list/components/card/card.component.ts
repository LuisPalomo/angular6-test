import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Post } from '../../../core/interfaces/post.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() post: Post;
  @Output() editButtonClicked: EventEmitter<Post> = new EventEmitter<Post>();
  @Output() removeButtonClicked: EventEmitter<Post> = new EventEmitter<Post>();

  constructor() {}

  clickEditButton() {
    this.editButtonClicked.emit(this.post);
  }

  clickRemoveButton() {
    this.removeButtonClicked.emit(this.post);
  }
}
