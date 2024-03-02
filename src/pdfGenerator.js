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

  const outPutPath = path.join(
    process.cwd(),
    "output",
    `${fileName}-${Date.now()}.pdf`
  );

  let buffer = await page.pdf({
    path: outPutPath,
    format: "A4",
    margin: { top: 20 },
    printBackground: true,
  });

  await browser.close();
};

export { pdfGenerator as default };
