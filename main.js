// 导入PDFObject库，用于在网页上嵌入PDF文档。这里使用CommonJS规范进行导入。
const PDFObject = require('pdfobject');
PDFObject.embed("/mydecoration.pdf", "#pdfContainer");
