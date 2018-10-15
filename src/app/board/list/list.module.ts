import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { PostService } from '../boardService/post.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [ListComponent],
  exports: [ListComponent],
  providers: [PostService],
})
export class ListModule { }
