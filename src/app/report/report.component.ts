import { Component, ViewChild, ElementRef} from '@angular/core';
import * as jsPDF from 'jspdf';
@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent {
  @ViewChild('content') content: ElementRef;
  public downloadPDF() {
    const doc = new jsPDF();
    const specialElementHandlers = {
      '#editor': function(element, renderer) {
        return true;
      }
    };
    const content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML, 15, 15, {
      'width': 190,
      'elementHanders': specialElementHandlers
    });

    doc.save('test.pdf');
  }
}
