---
title: Projects, roles and credentials
---

# Projects, roles and credentials

## Project spaces

Projects organize agents, workflows, resources and members. Confirm the active project before creating, editing or exporting; a resource name alone does not establish ownership.

Use the user-management or project entry to create projects, add members and assign roles. Visibility, member sources and available entries vary by role and deployment.

## Roles are not the whole permission model

- Administrator, editor, viewer and other roles affect visible menus and action scope.
- Viewing a resource does not imply permission to modify, execute, export or access all underlying data.
- Role menus do not imply row- or field-level authorization and do not replace tool-directory restrictions or remote-channel allowlists.

Before sharing a resource, confirm which roles can see it. Inspect credentials, addresses, instructions and business data before exporting.

## Credentials and models

1. Create a credential for the appropriate service in the controlled credential-management entry.
2. Generate a distinct secret at the provider with only the required permissions.
3. Enter it in local credential configuration, never in public Markdown, screenshots or example repositories.
4. Select the credential in the intended node or configuration and test with a no-side-effect request.
5. Revoke or rotate secrets when access changes or exposure occurs, then inspect references.

Model configuration is available from the agent conversation's model settings entry. Availability depends on provider, network, project configuration and deployment.

## Tool and data boundaries

File, SSH, script, HTTP and MCP capabilities interact with real systems. Use least privilege, fixed directories and destination allowlists. Bind parameters; never concatenate user input into commands or SQL. Remote channels require user allowlists; a hidden URL is not authentication.
