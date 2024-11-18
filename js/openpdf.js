function openPdfSection(page) {
  const url = window.location.href;
  const urlObj = new URL(url);
  urlObj.pathname = `/pages/pdf_viewer.html`;
  urlObj.searchParams.append("page", page);
  window.location.href = urlObj.toString();
}

const url = window.location.href;
const urlObj = new URL(url);
const params = urlObj.searchParams;
const page = params.get("page");     
const pdfUrl = `../assets/docs/moes-catalogue.pdf#page=${page ?? 1}`;
var pdf = document.getElementById("pdf-viewer-id");

if(pdf != null){
  pdf.data = pdfUrl;
}

