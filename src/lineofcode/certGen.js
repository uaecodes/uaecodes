import {PDFDocument, StandardFonts } from 'pdf-lib';
import download from 'downloadjs';
import fontkit from '@pdf-lib/fontkit'

import certEnPDF from './certEnPDF.pdf';
import certArPDF from './certArPDF.pdf';
import localFont from './Cairo-Regular.ttf'



export async function certGen(langu,firstName,lastName) {

  let url = certArPDF
  if (langu=="en"){
     url = certEnPDF
  }
  const existingPdfBytes = await fetch(url).then(res => res.arrayBuffer())

  const FontUrl = localFont
  const fontBytes = await fetch(FontUrl).then((res) => res.arrayBuffer())

  const pdfDoc = await PDFDocument.load(existingPdfBytes)
  pdfDoc.registerFontkit(fontkit)
  const ubuntuFont = await pdfDoc.embedFont(fontBytes)

  const pages = pdfDoc.getPages()
  const firstPage = pages[0]
  const { width, height } = firstPage.getSize()

  const text = firstName+" "+lastName;
  const textSize = 30;
  const textWidth = ubuntuFont.widthOfTextAtSize(text, textSize);
  const textHeight = ubuntuFont.heightAtSize(textSize);
  firstPage.drawText(text, {
    x: firstPage.getWidth() / 2 - textWidth / 2,
    y: firstPage.getHeight() / 2 - textHeight / 2 +14,
    size: textSize,
    font: ubuntuFont,
  });

  const pdfBytes = await pdfDoc.save()
  download(pdfBytes, "uae_codes.pdf", "application/pdf");
}

