import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CommentService } from '../../boardService/comment.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  CommentFormGroup: FormGroup;
  comments$: Observable<any>;
  postID: number;

  // HttpClient를 컴포넌트에 주입
  constructor(private commentService: CommentService, private fb: FormBuilder, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // 라우터에서 postID를 받아옴
    this.postID = this.route.snapshot.params.id;
    // formGroup 선언
    this.CommentFormGroup = this.fb.group({
      postingID: [this.postID],
      cWriter: ['작성자'],
      cPassword: ['password'],
      cContent: ['']
    });

    this.comments$ = this.commentService.getComments(this.postID);
  }

  postNewComment(formGroup: FormGroup) {
    // 새 댓글 생성
    // 백엔드로 댓글 전송
    this.commentService.postComment(formGroup.value).subscribe((res: any) => {
      if ( res.result === 'success') { // 성공시
        // 페이지 리로드(?)
        this.comments$ = this.commentService.getComments(this.postID);
      }
    });
  }

  postReComment(cWriter: string, cPassword: string, cContent: string) {
    // []속 주소를 가진 비밀번호 확인 페이지로 이동
    this.router.navigate(['/']);
    // 비밀번호 일치시 DB로 수정된 댓글 전송
  }

  postDelComment(cWriter: string, cPassword: string, cContent: string) {
    // 비밀번호 확인 페이지로 이동
    // 비밀번호 일치시 DB로 삭제할 댓글 전송
  }
}
