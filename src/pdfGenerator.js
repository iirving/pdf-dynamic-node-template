import puppeteer from "puppeteer";
import compileTemplate from "./complieTemplate.js";
import path from "path";

export const pdfGenerator = async function (fileName, data) {
  // Launch the browser HEADLESS and open a new blank page
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Compile the hbs template with the data
  const content = await compileTemplate("page", data);

  // Set the page content with the compiled template
  await page.setContent(content);
  await page.emulateMediaType("screen");

  // Set the pdf output options
  const outputFolderName = "output";
  const outPutPath = path.join(
    process.cwd(),
    outputFolderName,
    `${fileName}-${Date.now()}.pdf`
  );

  // set the pdf options
  const pdfOptions = {
    path: outPutPath,
    format: "A4",
    margin: { top: 20 },
    printBackground: true,
  };

  // Generate the pdf
  let buffer = await page.pdf(pdfOptions);

  // Close the puppeteer browser
  await browser.close();
  return buffer;
};

export { pdfGenerator as default };
