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

  id: number;
  posts$: Observable<any>;

  constructor(private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.posts$ = this.postService.getPosts();
    this.id = this.route.snapshot.params.id;
  }

  write() {
    this.router.navigate(['/write']);
  }
}
