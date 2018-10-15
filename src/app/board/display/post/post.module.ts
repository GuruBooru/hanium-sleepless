import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { PostComponent } from './post.component';
import { PostService } from '../../boardService/post.service';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  exports: [PostComponent],
  declarations: [PostComponent],
  providers: [PostService],
})
export class PostModule { }
