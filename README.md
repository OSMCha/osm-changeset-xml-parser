# osm-changeset-xml-parser

Parse OpenStreetMap Changeset metadata XML documents into plain JavaScript objects.

**Note: you may not need this package.** The OSM API is capable of returning this metadata in JSON natively if you append `.json` to the endpoint URL, like this:

```
curl -i 'https://api.openstreetmap.org/api/0.6/changeset/133061984.json'
```

## Installation

```
npm install @osmcha/osm-changeset-xml-parser
```

## Usage

```js
import parseChangesetXML from "@osmcha/osm-changeset-xml-parser";
let changeset = await parseChangesetXML(xmlString);
```

## Example input & output

Input:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<osm version="0.6" generator="openstreetmap-cgimap 2.0.1 (1849 spike-07.openstreetmap.org)" copyright="OpenStreetMap and contributors" attribution="http://www.openstreetmap.org/copyright" license="http://opendatacommons.org/licenses/odbl/1-0/">
 <changeset id="155530622" created_at="2024-08-20T21:36:16Z" closed_at="2024-08-20T21:36:17Z" open="false" user="jake-low" uid="8794039" min_lat="47.6647943" min_lon="-121.2881568" max_lat="47.6647943" max_lon="-121.2881568" comments_count="0" changes_count="1">
  <tag k="changesets_count" v="1992"/>
  <tag k="comment" v="Skykomish, WA: add name, operator, and website to Necklace Valley Trailhead"/>
  <tag k="created_by" v="iD 2.29.0"/>
  <tag k="host" v="https://www.openstreetmap.org/edit"/>
  <tag k="imagery_used" v="Bing Maps Aerial"/>
  <tag k="locale" v="en-US"/>
 </changeset>
</osm>
```

Output:

```json
{
  "version": "0.6",
  "generator": "openstreetmap-cgimap 2.0.1 (1849 spike-07.openstreetmap.org)",
  "copyright": "OpenStreetMap and contributors",
  "attribution": "http://www.openstreetmap.org/copyright",
  "license": "http://opendatacommons.org/licenses/odbl/1-0/",
  "changeset": {
    "id": 155530622,
    "created_at": "2024-08-20T21:36:16Z",
    "closed_at": "2024-08-20T21:36:17Z",
    "open": false,
    "user": "jake-low",
    "uid": 8794039,
    "min_lat": 47.6647943,
    "min_lon": -121.2881568,
    "max_lat": 47.6647943,
    "max_lon": -121.2881568,
    "comments_count": 0,
    "changes_count": 1,
    "tags": {
      "changesets_count": "1992",
      "comment": "Skykomish, WA: add name, operator, and website to Necklace Valley Trailhead",
      "created_by": "iD 2.29.0",
      "host": "https://www.openstreetmap.org/edit",
      "imagery_used": "Bing Maps Aerial",
      "locale": "en-US"
    }
  }
}
```
