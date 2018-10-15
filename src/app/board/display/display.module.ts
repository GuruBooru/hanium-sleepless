import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './display.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommentModule } from './comment/comment.module';
import { PostModule } from './post/post.module';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PostModule,
    CommentModule,
  ],
  declarations: [DisplayComponent]
})
export class DisplayModule { }
