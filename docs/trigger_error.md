---
title: Error Trigger
description: How to implement exception removal handling, capture exceptions, and configure exception responses.
meta:
  - name: keywords
    content: Exception Handling, Error Handling, Exception Capture, Error Capture, Exception Handling Mechanism, Global Exception, Error Response, Exception Response, Low-code, AI Workflow, Process Engine
---

## Error Trigger

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

Workflow-level error listening: capture exceptions or errors thrown by any node in this workflow; it does not span workflows. It cannot be the workflow's only trigger — pair it with an entry trigger such as Start. As shown in the figure below, when the error trigger catches an exception during the workflow execution, it can initiate a new exception handling branch to continue the process. Here, the business can independently respond to the captured exception information, such as sending alerts, etc.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

## Input

None


## Output

The output information will indicate which node in the workflow, at what time, and what kind of error occurred.

> Historical interface images are withheld pending review and recapture. Check operations against the current interface.

```json
[
  {
    "CreateAt": "2025-05-13T19:53:20.390535+08:00",
    "Error": "{\"Name\":\"test\",\"Content\":\"throw error\"}",
    "ErrorAppInstId": "v3g1sjx7pk",
    "ErrorAppName": "Throw Exception",
    "ExecutionUid": "313004680261140480",
    "WorkflowId": 18,
    "WorkflowName": "Error handler"
  }
]
```
