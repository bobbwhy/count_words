import fs from "fs";

export const openText = () => {
  const fn = process.argv.splice(-1)[0];
  return String(fs.readFileSync(`./src/${fn}`));
}
