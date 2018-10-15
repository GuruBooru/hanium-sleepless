import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentComponent } from './comment.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentService } from '../../boardService/comment.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [CommentComponent],
  declarations: [CommentComponent],
  providers: [CommentService]
})
export class CommentModule { }
