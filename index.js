import sax from "sax";

const TYPED_ATTRS = [
  "id",
  "uid",
  "min_lon",
  "min_lat",
  "max_lon",
  "max_lat",
  "comments_count",
  "changes_count",
  "open",
];

/*
 * Parse OSM Changeset Metadata XML, of the form returned by
 * https://www.openstreetmap.org/api/0.6/changeset/:id
 * (Contains changeset's bbox, timestamp, comment, and authorship)
 */
function parseChangesetXML(xmlString) {
  return new Promise((resolve, reject) => {
    let parser = sax.parser(true /* strict mode */, { lowercase: true });
    let result = {};

    parser.onopentag = (node) => {
      let name = node.name, attrs = node.attributes;
      switch (name) {
        case "osm":
          Object.assign(result, attrs);
          break;
        case "changeset":
          Object.assign((result.changeset ||= {}), attrs);
          break;
        case "tag":
          Object.assign((result.changeset.tags ||= {}), { [attrs.k]: attrs.v });
          break;
      }
    };

    parser.onend = () => {
      let { changeset } = result;
      for (let attr of TYPED_ATTRS) {
        changeset[attr] = JSON.parse(changeset[attr]);
      }
      resolve(result);
    };

    parser.onerror = reject;

    parser.write(xmlString);
    parser.close();
  });
}

export default parseChangesetXML;
