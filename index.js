// import { pdfGenerator } from "./src/pdfGenerator.js";
import { generatePdf } from "./src/generatePdf.js";

// async function generatePdf() {
const fileName = "Ians test file";
const dataFileName = "sampleData";
let buffer = await generatePdf(fileName, dataFileName);

//you can use this buffer if you want to upload this file to any storage (like: AWS S3)
// }

// generatePdf();
