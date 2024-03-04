import getJsonData from "./getJsonData.js";
import pdfGenerator from "./pdfGenerator.js";
import path from "path";
import fs from "fs-extra";

export const generatePdf = async (outputFileName, dynamicDatafileName) => {
  // get external dynamic data
  const data = await getJsonData("data", dynamicDatafileName);

  let buffer = await pdfGenerator(outputFileName, data);
  return buffer;
};
export { generatePdf as default };
