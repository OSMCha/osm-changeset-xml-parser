import fs from "node:fs/promises";
import tape from "tape";
import parseChangesetXML from "../index.js";

for await (const filename of fs.glob("tests/data/*.xml")) {
  tape(`testing file: ${filename}`, async (t) => {
    const input = await fs.readFile(filename);
    const expected = JSON.parse(await fs.readFile(filename.replace(".xml", ".json")));

    const actual = await parseChangesetXML(input);

    t.deepEqual(actual, expected);
    t.end();
  });
}
