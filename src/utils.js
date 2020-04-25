import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

export const saveAsPdf = () =>{
    var input = document.getElementById('resume');
    html2canvas(input, {
      // useCORS: true,
      // allowTaint: true,
      scrollY: -window.scrollY,
      width:2480,
      height:3508,
      scale:1
    }).then(canvas => {
      const image = canvas.toDataURL('image/jpeg');
      const doc = new jsPDF({
        // orientation: 'portrait',
        // unit: 'px',
        // format:'a4',
      });
        doc.addImage(image, 'JPEG',0,0,);
        doc.save(`resume_${Date.now()}.pdf`);
    });
};