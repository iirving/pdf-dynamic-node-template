import hbs from "handlebars";
import fs from "fs-extra";
import path from "path";
import getJsonData from "./getJsonData.js";
import base64img from "base64-img";

export const compileTemplate = async function (templateName, dataDyanamic) {
  const templateFilePath = path.join(
    process.cwd(),
    "src/template",
    `${templateName}.hbs`
  );

  const langType = "en";
  const staticContentData = await getJsonData(
    "src/template/locales",
    `${templateName}.${langType}`
  );
  // console.log("compileTemplate", "staticContentData", staticContentData);

  const publicPath = path.join(process.cwd(), "public");
  let staticCompanylogoPath = path.join(publicPath, "logo.png");
  staticCompanylogoPath = base64img.base64Sync("./public/logo.png");

  const staticPublicData = {
    public: { companylogo: `${staticCompanylogoPath}` },
  };
  // console.log("compileTemplate", "staticPublicData", staticPublicData);

  const data = { ...staticContentData, ...dataDyanamic, ...staticPublicData };
  // console.log("compileTemplate", "data", data);

  const htmlFile = await fs.readFile(templateFilePath, "utf-8");
  return hbs.compile(htmlFile)(data);
};

export { compileTemplate as default };
