import { getJsonData } from "./getJsonData.js";
import { pdfGenerator } from "./pdfGenerator.js";
import path from "path";
import fs from "fs-extra";

export const generatePdf = async (outputFileName, externalDatafileName) => {
  // get external data
  const data = await getJsonData("data", externalDatafileName);
  let buffer = await pdfGenerator(outputFileName, data);
};
