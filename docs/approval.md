---
title: Approval
description: The system supports both single-approver (OR-signature) and multi-approver (AND-signature) authorization modes. Approvals can be processed either through web interfaces or via Telegram bots.
meta:
  - name: keywords
    content: Workflow Approval, Telegram Bot Approval, Telegram Bot Button Interaction, Telegram Bot Button Response, Web-based Approval, Approval Flow Engine, Approval Flow Framework, Low-code, AI Workflow, Process Engine
---

## Approval

The system supports single-approver (OR-approval) and multi-approver (AND-approval) modes, with approval available via both web interfaces and Telegram bots. It allows configuration of timeout periods and timeout branches, as well as setting subsequent execution branches for both approved and rejected scenarios. For Telegram Bot operations, this feature enables interactive bot functionality through button callback responses, significantly simplifying Telegram Bot development.

A green output indicates approval, red indicates disapproval, and a gray output indicates a timeout.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


Personal pending approval data can be viewed under **User Tasks** in the **Approval** section, with support for one-click batch operations.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


By clicking on the approval details, you can view the complete content and actions of the approval.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


<iframe 
    width="800" 
    height="600" 
    src="https://www.youtube.com/embed/vjKWLpJLr7c"  frameborder="0" 
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
    allowfullscreen>
</iframe>


## Input

### Approval Channels

By default, Web is mandatory, and Telegram is optional. If you select Telegram, you will need to configure the associated bot credentials (Token), which must be created in the **App Development > Credential** section.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


### Name

Approval name.


### Content

Approval content.


### Members

Approval members. This section will display a list of accounts, supporting fuzzy search. If Telegram approval is enabled, you need to configure the users' Telegram IDs in the user list; otherwise, messages cannot be sent to Telegram users.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


### Type

Supports two common approval types:

- **Single-signature**: Only one approver needs to handle it. If this approver agrees, the process moves to the next node; if they reject it, the approval process ends.
- **Co-signature**: All approvers must agree for the process to move to the next node. If any approver rejects, the approval request will be denied, and the process will end.


### Timeout

Defaults to 0, indicating no timeout limit. If set to greater than 0, if the approval time exceeds the specified duration, the approval process will end and flow to the timeout branch.

Users can set the response actions for the timeout here.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.


## Output

The output contains two fields:

- **approval**: Represents the details of the approval, including the approval title, content, members, and approval results.

- **operationList**: Represents the results submitted by each approval member, including their comments and messages.

Below is an example of an output result:

```json
[
    {
        "approval": {
            "appInstId": "kjs6f044cs",
            "attr": "Any",
            "content": "hello world",
            "createAt": "2024-01-01T0xxxx",
            "endAt": "2024-01-01 xxxx",
            "executionUid": "2172667998xxxx",
            "expireAt": 0,
            "id": 4,
            "index": 0,
            "isTimeout": false,
            "name": "Test",
            "startAt": "2024-01-01 xxxx",
            "status": -99,
            "template": "approval",
            "timeout": 0,
            "updateAt": "2024-01-xxxx",
            "users": "iolinker",
            "workflowId": 1,
            "workflowUser": "iolinker"
        },
        "operationList": [
            {
                "approvalId": 4,
                "comment": "",
                "createAt": "2024-01-xxxx",
                "id": 4,
                "name": "Test",
                "status": 0,
                "updateAt": "2024-01-xxxx",
                "user": "iolinker"
            }
        ]
    }
]
```
