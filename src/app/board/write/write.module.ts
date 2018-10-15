import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WriteComponent } from './write.component';
import { PostService } from '../boardService/post.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [WriteComponent],
  exports: [WriteComponent],
  providers: [PostService],
})
export class WriteModule { }
