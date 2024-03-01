import hbs from "handlebars";
import fs from "fs-extra";
import path from "path";

export const compileTemplate = async function (templateName, data) {
  const templateFilePath = path.join(
    process.cwd(),
    "src/template",
    `${templateName}.hbs`
  );
  const htmlFile = await fs.readFile(templateFilePath, "utf-8");
  return hbs.compile(htmlFile)(data);
};
