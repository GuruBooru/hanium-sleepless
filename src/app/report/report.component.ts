import { Component, ViewChild, ElementRef, OnInit} from '@angular/core';
import * as jsPDF from 'jspdf';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { Router, ActivatedRoute } from '@angular/router';
// import { html2canvas } from 'html2canvas';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  @ViewChild('content') content: ElementRef;
  user_id: string;
  scan_id: string;
  file_md5_url: string;
  isfile: number;
  reportInfo$: Observable<any>;
  yaraInfo$: Observable<any>;

  constructor(private userService: UserService, private route: ActivatedRoute, private router: Router) {

  }

  ngOnInit() {  // 보고서 정보 받아오기
    this.user_id = sessionStorage.getItem('id');
    this.scan_id = this.route.snapshot.params.scan_id;
    this.file_md5_url = this.route.snapshot.params.file_md5_url;
    this.isfile = +this.route.snapshot.params.isfile;

    this.reportInfo$ = this.userService.getReport(this.user_id, this.scan_id, this.file_md5_url, this.isfile);
    this.yaraInfo$ = this.userService.getYaraReport(this.user_id, this.scan_id, this.file_md5_url, this.isfile);
  }

  // PDF 출력
  public downloadPDF() {
    const doc = new jsPDF('p', 'pt', 'a4');

    const specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 12, 12, {
      'width': 190,
      'elementHanders': specialElementHandlers
    });

    doc.save('SleeplessReport.pdf');
  }
}
