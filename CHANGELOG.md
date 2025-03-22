# Changelog

All notable changes to this project will be documented in this file.

Versioning of this project adheres to the [Semantic Versioning](https://semver.org/spec/v2.0.0.html) spec.

## [1.0.1]

Released 2025-03-22

- Fixed a bug that could cause a parse error if the changeset XML did not
  contain one of the `TYPED_ATTRS` fields (`id`, `uid`, `min_lon`, `min_lat`,
  `max_lon`, `max_lat`, `comments_count`, `changes_count`, `open`). Instead,
  if one of these fields is missing in the XML, it will also be missing in
  the parsed object, allowing callers to decide how best to handle it.

## [1.0.0]

Released 2024-09-09

Initial release.

[1.0.1]: https://github.com/OSMCha/osm-changeset-xml-parser/releases/tag/v1.0.1
[1.0.0]: https://github.com/OSMCha/osm-changeset-xml-parser/releases/tag/v1.0.0

