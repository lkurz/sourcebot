// THIS IS A AUTO-GENERATED FILE. DO NOT MODIFY MANUALLY!
const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "GenericGitHostConnectionConfig",
  "properties": {
    "type": {
      "const": "git",
      "description": "Generic Git host configuration"
    },
    "url": {
      "type": "string",
      "format": "url",
      "description": "The URL to the git repository. This can either be a remote URL (prefixed with `http://` or `https://`) or a absolute path to a directory on the local machine (prefixed with `file://`). If a local directory is specified, it must point to the root of a git repository. Local directories are treated as read-only modified. Local directories support glob patterns.",
      "pattern": "^(https?:\\/\\/[^\\s/$.?#].[^\\s]*|file:\\/\\/\\/[^\\s]+)$",
      "examples": [
        "https://github.com/sourcebot-dev/sourcebot",
        "file:///path/to/repo",
        "file:///repos/*"
      ]
    },
    "revisions": {
      "type": "object",
      "description": "The revisions (branches, tags) that should be included when indexing. The default branch (HEAD) is always indexed. A maximum of 64 revisions can be indexed, with any additional revisions being ignored.",
      "properties": {
        "branches": {
          "type": "array",
          "description": "List of branches to include when indexing. For a given repo, only the branches that exist on the repo's remote *and* match at least one of the provided `branches` will be indexed. The default branch (HEAD) is always indexed. Glob patterns are supported. A maximum of 64 branches can be indexed, with any additional branches being ignored.",
          "items": {
            "type": "string"
          },
          "examples": [
            [
              "main",
              "release/*"
            ],
            [
              "**"
            ]
          ],
          "default": []
        },
        "tags": {
          "type": "array",
          "description": "List of tags to include when indexing. For a given repo, only the tags that exist on the repo's remote *and* match at least one of the provided `tags` will be indexed. Glob patterns are supported. A maximum of 64 tags can be indexed, with any additional tags being ignored.",
          "items": {
            "type": "string"
          },
          "examples": [
            [
              "latest",
              "v2.*.*"
            ],
            [
              "**"
            ]
          ],
          "default": []
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "type",
    "url"
  ],
  "additionalProperties": false
} as const;
export { schema as genericGitHostSchema };