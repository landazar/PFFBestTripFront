import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { GuideVoyage } from 'src/app/Model/guide-voyage';
import { GuideVoyageService } from 'src/app/Service/guide-voyage.service';



@Component({
  selector: 'app-details-guide-voyage',
  templateUrl: './details-guide.component.html',
  styleUrls: ['./details-guide.component.css']
})
export class DetailsGuideComponent implements OnInit{
  guide!: GuideVoyage;

  notation: number = 0;

  idGuide: number = 0;

  constructor(
    private route: ActivatedRoute,
    private guideVoyageService: GuideVoyageService,
    private router: Router
  ) {this.idGuide = route.snapshot.params["idGuide"]}

  
  @ViewChild('pdfContent', {static:true}) pdfContent!:ElementRef;

  

  ngOnInit(): void {
    this.getGuideVoyage();
    
  }

  getGuideVoyage(): void {
    this.route.paramMap.subscribe(params => {
      const idGuide = +params.get('idGuide')!;
      this.guideVoyageService.getGuideVoyageById(idGuide).subscribe((guide: GuideVoyage) => {
        this.guide = guide;
      });
    });
  }

  

  generatePDF() {
    const div = document.getElementById('pdfContent');
    const options = {
      background: 'white',
      scale: 3
    };

    html2canvas(div!, options).then((canvas) => {

      var img = canvas.toDataURL("image/PNG");
      var doc = new jsPDF('l', 'mm', 'a4', true);

      // Add image Canvas to PDF
      const bufferX = 5;
      const bufferY = 5;
      const imgProps = (<any>doc).getImageProperties(img);
      const pdfWidth = doc.internal.pageSize.getWidth() - 2 * bufferX;
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      doc.addImage(img, 'PNG', bufferX, bufferY, pdfWidth, pdfHeight, undefined, 'FAST');

      return doc;
    }).then((doc) => {
      doc.save('guide.pdf');  
    });
  }

  getNbrEtoile() {
    console.log(this.notation);
    console.log("id : " + this.idGuide);
    this.guideVoyageService.setNoteGuide(this.idGuide, this.notation).subscribe();
    this.router.navigateByUrl("afficher-guide-voyage");
  }
}
