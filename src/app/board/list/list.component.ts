import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PostService } from '../boardService/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  posts$: Observable<any>;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
  }

  // 게시물 작성 화면으로
  write() {
    this.router.navigate(['/write']);
  }

  // 게시물
  navigate(id) {
    this.router.navigate([`/post/${id}`]);
  }
}
