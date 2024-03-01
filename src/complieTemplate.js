import hbs from "handlebars";
import fs from "fs-extra";
import path from "path";
import { getJsonData } from "./getJsonData.js";

export const compileTemplate = async function (templateName, dataDyanamic) {
  const templateFilePath = path.join(
    process.cwd(),
    "src/template",
    `${templateName}.hbs`
  );

  const langType = "en";
  const staticContentData = await getJsonData(
    "src/template/data",
    `${templateName}.${langType}`
  );
  // console.log("compileTemplate", "staticContentData", staticContentData);

  const data = { ...staticContentData, ...dataDyanamic };
  // console.log("compileTemplate", "data", data);

  const htmlFile = await fs.readFile(templateFilePath, "utf-8");
  return hbs.compile(htmlFile)(data);
};
