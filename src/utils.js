import React from 'react';
import * as jsPDF from 'jspdf';
import * as html2canvas from 'html2canvas';

export const saveAsPdf = () =>{
    const input = document.getElementById('resume');
    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF();
        pdf.addImage(imgData, 'JPEG', 0, 0);
        // pdf.output('dataurlnewwindow');
        pdf.save("resume.pdf");
      });
};