import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { PostService } from '../boardService/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-write',
  templateUrl: './write.component.html',
  styleUrls: ['./write.component.css']
})
export class WriteComponent implements OnInit {

  formGroup: FormGroup;
  posts: Observable<any>;
  page_title = '[sleepless]';
  number = 0;
  newTitle: string;
  postingID: string;

  constructor(private formbuilder: FormBuilder, private postService: PostService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.postingID = this.route.snapshot.params.id;
    this.formGroup = this.formbuilder.group({
      title: ['', [Validators.required]],
      pContent: [''],
      pWriter: [''],
      pPassword: [''],
    });
  }

  add_click(formGroup: FormGroup): void {
    const newPosting = {
      title: formGroup.get('title').value,
      pcontent: formGroup.get('pContent').value,
      pWriter: formGroup.get('pWriter').value,
      pPassword: formGroup.get('pPassword').value
    };

    this.postService.sendPost(newPosting).subscribe((res: any) => {
      if (res.result === 'success') {
        this.router.navigate(['/board']);
      }
    });
  }

}
