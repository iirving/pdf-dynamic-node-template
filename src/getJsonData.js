import path from "path";
import fs from "fs-extra";

export const getJsonData = async (subDirectory, fileName) => {
  // console.log("subDirectory", subDirectory);
  // console.log("fileName", fileName);
  // get external data json
  const dataFilePath = path.join(
    process.cwd(),
    subDirectory,
    `${fileName}.json`
  );
  // console.log("dataFilePath", dataFilePath);
  const dataFile = await fs.readFile(dataFilePath, "utf-8");
  const data = JSON.parse(dataFile);
  // console.log("data", data);
  return data;
};
