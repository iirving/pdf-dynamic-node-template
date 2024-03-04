import puppeteer from "puppeteer";
import compileTemplate from "./complieTemplate.js";
import path from "path";

export const pdfGenerator = async function (fileName, data) {
  // Launch the browser HEADLESS and open a new blank page
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const content = await compileTemplate("page", data);

  await page.setContent(content);
  await page.emulateMediaType("screen");

  const outputFolderName = "output";
  const outPutPath = path.join(
    process.cwd(),
    outputFolderName,
    `${fileName}-${Date.now()}.pdf`
  );

  const pdfOptions = {
    path: outPutPath,
    format: "A4",
    margin: { top: 20 },
    printBackground: true,
  };

  let buffer = await page.pdf(pdfOptions);

  await browser.close();
  return buffer;
};

export { pdfGenerator as default };
