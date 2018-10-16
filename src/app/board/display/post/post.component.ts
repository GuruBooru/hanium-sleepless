import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PostService } from '../../boardService/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  posts$: Observable<any>;

  readform: FormGroup;
  pName: String;
  pTime: String;
  pTitle: String;
  posting: String;
  pNum: String;
  postingInfo: any[];
  id: number;

  constructor(private fb: FormBuilder, private postService: PostService, private route: ActivatedRoute , private router: Router) {
     this.createForm();
     }
  createForm() {
    this.readform = this.fb.group({
      pTime: [' ', Validators.required ],
      pNum: [' ', Validators.required ],
      pName: [' ', Validators.required ],
      posting: [' ', Validators.required ],
      pTitle: [' ', Validators.required ]
    });
  }

  formload() {
    this.pNum = this.postingInfo[0];
    this.pTitle = this.postingInfo[1];
    this.pName = this.postingInfo[2];
    this.posting = this.postingInfo[3];
    this.pTime = this.postingInfo[4];
  }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.posts$ = this.postService.getPost(this.id);

    // this.postingInfo = this.posts$[this.id - 1];
    // this.formload();
  }

  navigate() {
    this.router.navigate(['/board']);
  }
}
