// THIS IS A AUTO-GENERATED FILE. DO NOT MODIFY MANUALLY!
const schema = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "definitions": {
    "RepoNameRegexIncludeFilter": {
      "type": "string",
      "description": "Only clone repos whose name matches the given regexp.",
      "format": "regexp",
      "default": "^(foo|bar)$"
    },
    "RepoNameRegexExcludeFilter": {
      "type": "string",
      "description": "Don't mirror repos whose names match this regexp.",
      "format": "regexp",
      "default": "^(fizz|buzz)$"
    },
    "ZoektConfig": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "Type": {
              "const": "github"
            },
            "GitHubUrl": {
              "type": "string",
              "description": "GitHub Enterprise url. If not set github.com will be used as the host."
            },
            "GitHubUser": {
              "type": "string",
              "description": "The GitHub user to mirror"
            },
            "GitHubOrg": {
              "type": "string",
              "description": "The GitHub organization to mirror"
            },
            "Name": {
              "type": "string",
              "description": "Only clone repos whose name matches the given regexp.",
              "format": "regexp",
              "default": "^(foo|bar)$"
            },
            "Exclude": {
              "type": "string",
              "description": "Don't mirror repos whose names match this regexp.",
              "format": "regexp",
              "default": "^(fizz|buzz)$"
            },
            "CredentialPath": {
              "type": "string",
              "description": "Path to a file containing a GitHub access token.",
              "default": "~/.github-token"
            },
            "Topics": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "Only mirror repos that have one of the given topics"
            },
            "ExcludeTopics": {
              "type": "array",
              "items": {
                "type": "string"
              },
              "description": "Don't mirror repos that have one of the given topics"
            },
            "NoArchived": {
              "type": "boolean",
              "description": "Mirror repos that are _not_ archived",
              "default": false
            },
            "IncludeForks": {
              "type": "boolean",
              "description": "Also mirror forks",
              "default": false
            }
          },
          "required": [
            "Type"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "Type": {
              "const": "gitlab"
            },
            "GitLabURL": {
              "type": "string",
              "description": "The GitLab API url.",
              "default": "https://gitlab.com/api/v4/"
            },
            "Name": {
              "type": "string",
              "description": "Only clone repos whose name matches the given regexp.",
              "format": "regexp",
              "default": "^(foo|bar)$"
            },
            "Exclude": {
              "type": "string",
              "description": "Don't mirror repos whose names match this regexp.",
              "format": "regexp",
              "default": "^(fizz|buzz)$"
            },
            "OnlyPublic": {
              "type": "boolean",
              "description": "Only mirror public repos",
              "default": false
            },
            "CredentialPath": {
              "type": "string",
              "description": "Path to a file containing a GitLab access token.",
              "default": "~/.gitlab-token"
            }
          },
          "required": [
            "Type"
          ],
          "additionalProperties": false
        }
      ]
    },
    "GitHubConfig": {
      "type": "object",
      "properties": {
        "Type": {
          "const": "github"
        },
        "GitHubUrl": {
          "type": "string",
          "description": "GitHub Enterprise url. If not set github.com will be used as the host."
        },
        "GitHubUser": {
          "type": "string",
          "description": "The GitHub user to mirror"
        },
        "GitHubOrg": {
          "type": "string",
          "description": "The GitHub organization to mirror"
        },
        "Name": {
          "type": "string",
          "description": "Only clone repos whose name matches the given regexp.",
          "format": "regexp",
          "default": "^(foo|bar)$"
        },
        "Exclude": {
          "type": "string",
          "description": "Don't mirror repos whose names match this regexp.",
          "format": "regexp",
          "default": "^(fizz|buzz)$"
        },
        "CredentialPath": {
          "type": "string",
          "description": "Path to a file containing a GitHub access token.",
          "default": "~/.github-token"
        },
        "Topics": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Only mirror repos that have one of the given topics"
        },
        "ExcludeTopics": {
          "type": "array",
          "items": {
            "type": "string"
          },
          "description": "Don't mirror repos that have one of the given topics"
        },
        "NoArchived": {
          "type": "boolean",
          "description": "Mirror repos that are _not_ archived",
          "default": false
        },
        "IncludeForks": {
          "type": "boolean",
          "description": "Also mirror forks",
          "default": false
        }
      },
      "required": [
        "Type"
      ],
      "additionalProperties": false
    },
    "GitLabConfig": {
      "type": "object",
      "properties": {
        "Type": {
          "const": "gitlab"
        },
        "GitLabURL": {
          "type": "string",
          "description": "The GitLab API url.",
          "default": "https://gitlab.com/api/v4/"
        },
        "Name": {
          "type": "string",
          "description": "Only clone repos whose name matches the given regexp.",
          "format": "regexp",
          "default": "^(foo|bar)$"
        },
        "Exclude": {
          "type": "string",
          "description": "Don't mirror repos whose names match this regexp.",
          "format": "regexp",
          "default": "^(fizz|buzz)$"
        },
        "OnlyPublic": {
          "type": "boolean",
          "description": "Only mirror public repos",
          "default": false
        },
        "CredentialPath": {
          "type": "string",
          "description": "Path to a file containing a GitLab access token.",
          "default": "~/.gitlab-token"
        }
      },
      "required": [
        "Type"
      ],
      "additionalProperties": false
    }
  },
  "properties": {
    "$schema": {
      "type": "string"
    },
    "Configs": {
      "type": "array",
      "items": {
        "anyOf": [
          {
            "type": "object",
            "properties": {
              "Type": {
                "const": "github"
              },
              "GitHubUrl": {
                "type": "string",
                "description": "GitHub Enterprise url. If not set github.com will be used as the host."
              },
              "GitHubUser": {
                "type": "string",
                "description": "The GitHub user to mirror"
              },
              "GitHubOrg": {
                "type": "string",
                "description": "The GitHub organization to mirror"
              },
              "Name": {
                "type": "string",
                "description": "Only clone repos whose name matches the given regexp.",
                "format": "regexp",
                "default": "^(foo|bar)$"
              },
              "Exclude": {
                "type": "string",
                "description": "Don't mirror repos whose names match this regexp.",
                "format": "regexp",
                "default": "^(fizz|buzz)$"
              },
              "CredentialPath": {
                "type": "string",
                "description": "Path to a file containing a GitHub access token.",
                "default": "~/.github-token"
              },
              "Topics": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "description": "Only mirror repos that have one of the given topics"
              },
              "ExcludeTopics": {
                "type": "array",
                "items": {
                  "type": "string"
                },
                "description": "Don't mirror repos that have one of the given topics"
              },
              "NoArchived": {
                "type": "boolean",
                "description": "Mirror repos that are _not_ archived",
                "default": false
              },
              "IncludeForks": {
                "type": "boolean",
                "description": "Also mirror forks",
                "default": false
              }
            },
            "required": [
              "Type"
            ],
            "additionalProperties": false
          },
          {
            "type": "object",
            "properties": {
              "Type": {
                "const": "gitlab"
              },
              "GitLabURL": {
                "type": "string",
                "description": "The GitLab API url.",
                "default": "https://gitlab.com/api/v4/"
              },
              "Name": {
                "type": "string",
                "description": "Only clone repos whose name matches the given regexp.",
                "format": "regexp",
                "default": "^(foo|bar)$"
              },
              "Exclude": {
                "type": "string",
                "description": "Don't mirror repos whose names match this regexp.",
                "format": "regexp",
                "default": "^(fizz|buzz)$"
              },
              "OnlyPublic": {
                "type": "boolean",
                "description": "Only mirror public repos",
                "default": false
              },
              "CredentialPath": {
                "type": "string",
                "description": "Path to a file containing a GitLab access token.",
                "default": "~/.gitlab-token"
              }
            },
            "required": [
              "Type"
            ],
            "additionalProperties": false
          }
        ]
      }
    }
  },
  "required": [
    "Configs"
  ],
  "additionalProperties": false
} as const;
export { schema as indexSchema };